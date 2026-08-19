import {
  Plus,
  Pencil,
  Trash2,
  Save,
  X
} from "lucide-react";
import { useState } from "react";

import toast from "react-hot-toast";

import { usePortfolio } from "../context/PortfolioContext";

function SkillsManager() {
  const {
    data,
    addSkill,
    updateSkill,
    deleteSkill
  } = usePortfolio();

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      level: ""
    });

  const resetForm = () => {
    setFormData({
      name: "",
      level: ""
    });

    setEditingId(null);

    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.level
    ) {
      toast.error(
        "Nama dan level harus diisi"
      );

      return;
    }

    if (editingId) {
      updateSkill(
        editingId,
        {
          ...formData,
          level: Number(formData.level)
        }
      );

      toast.success(
        "Skill berhasil diperbarui"
      );
    } else {
      addSkill({
        ...formData,
        level: Number(formData.level)
      });

      toast.success(
        "Skill berhasil ditambahkan"
      );
    }

    resetForm();
  };

  const handleEdit = (skill) => {
    setEditingId(skill.id);

    setFormData({
      name: skill.name,
      level: skill.level
    });

    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete =
      window.confirm(
        "Yakin ingin menghapus skill ini?"
      );

    if (!confirmDelete) return;

    deleteSkill(id);

    toast.success(
      "Skill berhasil dihapus"
    );
  };

  return (
    <div>

      <div className="manager-header">

        <div>
          <p>MANAGEMENT</p>

          <h1>Skills</h1>
        </div>

        <button
          className="btn btn-primary"
          onClick={() =>
            setShowForm(true)
          }
        >
          <Plus size={18} />

          Tambah Skill
        </button>

      </div>

      {showForm && (

        <div className="manager-card">

          <h2>
            {editingId
              ? "Edit Skill"
              : "Tambah Skill"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">

                <label>
                  Nama Skill
                </label>

                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value
                    })
                  }
                  placeholder="Contoh: React"
                />

              </div>

              <div className="form-group">

                <label>
                  Level %
                </label>

                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.level}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      level: e.target.value
                    })
                  }
                />

              </div>

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

        {data.skills.map((skill) => (

          <div
            className="data-item"
            key={skill.id}
          >

            <div>

              <h3>
                {skill.name}
              </h3>

              <p>
                Level: {skill.level}%
              </p>

            </div>

            <div className="data-actions">

              <button
                onClick={() =>
                  handleEdit(skill)
                }
              >
                <Pencil size={18} />
              </button>

              <button
                className="delete-button"
                onClick={() =>
                  handleDelete(skill.id)
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

export default SkillsManager;