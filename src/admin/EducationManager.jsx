import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Save,
  X
} from "lucide-react";
import toast from "react-hot-toast";

import { usePortfolio } from "../context/PortfolioContext";

function EducationManager() {
  const {
    data,
    addEducation,
    updateEducation,
    deleteEducation
  } = usePortfolio();

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    period: "",
    description: ""
  });

  const resetForm = () => {
    setFormData({
      school: "",
      degree: "",
      period: "",
      description: ""
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.school ||
      !formData.degree ||
      !formData.period
    ) {
      toast.error(
        "School, degree, dan period wajib diisi"
      );

      return;
    }

    if (editingId) {
      updateEducation(editingId, formData);

      toast.success(
        "Data pendidikan berhasil diperbarui"
      );
    } else {
      addEducation(formData);

      toast.success(
        "Data pendidikan berhasil ditambahkan"
      );
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setFormData({
      school: item.school,
      degree: item.degree,
      period: item.period,
      description: item.description
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus data pendidikan ini?"
    );

    if (!confirmDelete) return;

    deleteEducation(id);

    toast.success(
      "Data pendidikan berhasil dihapus"
    );
  };

  return (
    <div>
      <div className="manager-header">
        <div>
          <p>MANAGEMENT</p>
          <h1>Education</h1>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          <Plus size={18} />
          Tambah Education
        </button>
      </div>

      {showForm && (
        <div className="manager-card">
          <h2>
            {editingId
              ? "Edit Education"
              : "Tambah Education"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              <div className="form-group">
                <label>Nama Sekolah / Universitas</label>

                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="Contoh: Universitas ABC"
                />
              </div>

              <div className="form-group">
                <label>Jurusan / Gelar</label>

                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="Contoh: S1 Teknik Informatika"
                />
              </div>

              <div className="form-group">
                <label>Periode</label>

                <input
                  type="text"
                  name="period"
                  value={formData.period}
                  onChange={handleChange}
                  placeholder="2020 - 2024"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Deskripsi</label>

              <textarea
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Deskripsi pendidikan..."
              />
            </div>

            <div className="form-actions">

              <button
                type="submit"
                className="btn btn-primary"
              >
                <Save size={18} />
                Simpan
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={resetForm}
              >
                <X size={18} />
                Batal
              </button>

            </div>
          </form>
        </div>
      )}

      <div className="data-list">

        {data.education.length === 0 ? (
          <div className="empty-data">
            Belum ada data pendidikan.
          </div>
        ) : (
          data.education.map((item) => (
            <div
              className="data-item"
              key={item.id}
            >
              <div className="data-item-content">

                <span className="data-period">
                  {item.period}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <strong>
                  {item.school}
                </strong>

                <p>
                  {item.description}
                </p>

              </div>

              <div className="data-actions">

                <button
                  type="button"
                  onClick={() =>
                    handleEdit(item)
                  }
                  title="Edit"
                >
                  <Pencil size={18} />
                </button>

                <button
                  type="button"
                  className="delete-button"
                  onClick={() =>
                    handleDelete(item.id)
                  }
                  title="Hapus"
                >
                  <Trash2 size={18} />
                </button>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default EducationManager;