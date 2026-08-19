import { useState } from "react";
import toast from "react-hot-toast";
import { Save } from "lucide-react";

import { usePortfolio } from "../context/PortfolioContext";

function ProfileManager() {
  const {
    data,
    updateProfile
  } = usePortfolio();

  const [formData, setFormData] =
    useState(data.profile);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProfile(formData);

    toast.success(
      "Profile berhasil diperbarui"
    );
  };

  return (
    <div>

      <div className="manager-header">

        <div>
          <p>MANAGEMENT</p>

          <h1>
            Profile
          </h1>
        </div>

      </div>

      <div className="manager-card">

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>Nama</label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Profesi / Jabatan</label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Nomor Telepon</label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Lokasi</label>

              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>URL Foto Profile</label>

              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

          </div>

          <div className="form-group">
            <label>Deskripsi</label>

            <textarea
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
          >
            <Save size={18} />

            Simpan Profile
          </button>

        </form>

      </div>

    </div>
  );
}

export default ProfileManager;