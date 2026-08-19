import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  ExternalLink,
  Github
} from "lucide-react";

import toast from "react-hot-toast";
import { usePortfolio } from "../context/PortfolioContext";

function PortfolioManager() {
  const {
    data,
    addPortfolio,
    updatePortfolio,
    deletePortfolio
  } = usePortfolio();

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      description: "",
      image: "",
      github: "",
      demo: ""
    });

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      description: "",
      image: "",
      github: "",
      demo: ""
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
      !formData.title ||
      !formData.category ||
      !formData.description
    ) {
      toast.error(
        "Judul, kategori, dan deskripsi wajib diisi"
      );

      return;
    }

    if (editingId) {
      updatePortfolio(
        editingId,
        formData
      );

      toast.success(
        "Portfolio berhasil diperbarui"
      );
    } else {
      addPortfolio(formData);

      toast.success(
        "Portfolio berhasil ditambahkan"
      );
    }

    resetForm();
  };

  const handleEdit = (project) => {
    setEditingId(project.id);

    setFormData({
      title: project.title || "",
      category: project.category || "",
      description: project.description || "",
      image: project.image || "",
      github: project.github || "",
      demo: project.demo || ""
    });

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Yakin ingin menghapus portfolio ini?"
    );

    if (!confirmDelete) return;

    deletePortfolio(id);

    toast.success(
      "Portfolio berhasil dihapus"
    );
  };

  return (
    <div>

      <div className="manager-header">

        <div>
          <p>MANAGEMENT</p>

          <h1>Portfolio</h1>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          <Plus size={18} />

          Tambah Project
        </button>

      </div>

      {showForm && (
        <div className="manager-card">

          <h2>
            {editingId
              ? "Edit Project"
              : "Tambah Project"}
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="form-group">

                <label>Judul Project</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Contoh: Inventory Management System"
                />

              </div>

              <div className="form-group">

                <label>Kategori</label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Web Application"
                />

              </div>

              <div className="form-group">

                <label>URL Gambar</label>

                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://..."
                />

              </div>

              <div className="form-group">

                <label>GitHub URL</label>

                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                />

              </div>

              <div className="form-group">

                <label>Demo URL</label>

                <input
                  type="url"
                  name="demo"
                  value={formData.demo}
                  onChange={handleChange}
                  placeholder="https://..."
                />

              </div>

            </div>

            <div className="form-group">

              <label>Deskripsi Project</label>

              <textarea
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Jelaskan project Anda..."
              />

            </div>

            <div className="form-actions">

              <button
                type="submit"
                className="btn btn-primary"
              >
                <Save size={18} />

                Simpan Project
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

      <div className="portfolio-admin-grid">

        {data.portfolio.length === 0 ? (
          <div className="empty-data">
            Belum ada portfolio.
          </div>
        ) : (
          data.portfolio.map((project) => (

            <div
              className="admin-project-card"
              key={project.id}
            >

              <div className="admin-project-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.style.display =
                        "none";
                    }}
                  />
                ) : (
                  <div className="project-placeholder">
                    {project.title.charAt(0)}
                  </div>
                )}

              </div>

              <div className="admin-project-content">

                <span>
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-links">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                </div>

                <div className="data-actions">

                  <button
                    type="button"
                    onClick={() =>
                      handleEdit(project)
                    }
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() =>
                      handleDelete(project.id)
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default PortfolioManager;