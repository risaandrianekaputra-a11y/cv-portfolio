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

function ExperienceManager() {
  const {
    data,
    addExperience,
    updateExperience,
    deleteExperience
  } = usePortfolio();

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      position: "",
      company: "",
      period: "",
      description: ""
    });

  const resetForm = () => {
    setFormData({
      position: "",
      company: "",
      period: "",
      description: ""
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.position || !formData.company) {
      toast.error("Data wajib diisi");

      return;
    }

    if (editingId) {
      updateExperience(editingId, formData);

      toast.success(
        "Experience berhasil diperbarui"
      );
    } else {
      addExperience(formData);

      toast.success(
        "Experience berhasil ditambahkan"
      );
    }

    resetForm();
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setFormData({
      position: item.position,
      company: item.company,
      period: item.period,
      description: item.description
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (
      !window.confirm(
        "Yakin ingin menghapus data?"
      )
    ) {
      return;
    }

    deleteExperience(id);

    toast.success(
      "Experience berhasil dihapus"
    );
  };

  return (
    <div>

      <div className="manager-header">

        <div>
          <p>MANAGEMENT</p>
          <h1>Experience</h1>
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            setShowForm(true)
          }
        >
          <Plus size={18} />

          Tambah Experience
        </button>

      </div>

      {showForm && (
        <div className="manager-card">

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">

                <label>Position</label>

                <input
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      position: e.target.value
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label>Company</label>

                <input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value
                    })
                  }
                />

              </div>

              <div className="form-group">

                <label>Period</label>

                <input
                  placeholder="2024 - Sekarang"
                  value={formData.period}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      period: e.target.value
                    })
                  }
                />

              </div>

            </div>

            <div className="form-group">

              <label>Description</label>

              <textarea
                rows="5"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value
                  })
                }
              />

            </div>

            <div className="form-actions">

              <button
                className="btn btn-primary"
                type="submit"
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

        {data.experience.map((item) => (

          <div
            className="data-item"
            key={item.id}
          >

            <div>

              <h3>
                {item.position}
              </h3>

              <strong>
                {item.company}
              </strong>

              <p>
                {item.period}
              </p>

              <p>
                {item.description}
              </p>

            </div>

            <div className="data-actions">

              <button
                onClick={() =>
                  handleEdit(item)
                }
              >
                <Pencil size={18} />
              </button>

              <button
                className="delete-button"
                onClick={() =>
                  handleDelete(item.id)
                }
              >
                <Trash2 size={18} />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ExperienceManager;