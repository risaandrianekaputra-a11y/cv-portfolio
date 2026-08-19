import { createContext, useContext, useEffect, useState } from "react";
import { defaultData } from "../data/defaultData";

const PortfolioContext = createContext();

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("portfolioData");

    return savedData
      ? JSON.parse(savedData)
      : defaultData;
  });

  useEffect(() => {
    localStorage.setItem(
      "portfolioData",
      JSON.stringify(data)
    );
  }, [data]);

  const updateProfile = (profile) => {
    setData((prev) => ({
      ...prev,
      profile
    }));
  };

  const updateSocial = (social) => {
    setData((prev) => ({
      ...prev,
      social
    }));
  };

  const addSkill = (skill) => {
    setData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          ...skill,
          id: Date.now()
        }
      ]
    }));
  };

  const updateSkill = (id, updatedSkill) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id
          ? { ...skill, ...updatedSkill }
          : skill
      )
    }));
  };

  const deleteSkill = (id) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (skill) => skill.id !== id
      )
    }));
  };

  const addExperience = (experience) => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          ...experience,
          id: Date.now()
        }
      ]
    }));
  };

  const updateExperience = (id, updatedExperience) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id
          ? { ...item, ...updatedExperience }
          : item
      )
    }));
  };

  const deleteExperience = (id) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter(
        (item) => item.id !== id
      )
    }));
  };

  const addEducation = (education) => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          ...education,
          id: Date.now()
        }
      ]
    }));
  };

  const updateEducation = (id, updatedEducation) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id
          ? { ...item, ...updatedEducation }
          : item
      )
    }));
  };

  const deleteEducation = (id) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (item) => item.id !== id
      )
    }));
  };

  const addPortfolio = (portfolio) => {
    setData((prev) => ({
      ...prev,
      portfolio: [
        ...prev.portfolio,
        {
          ...portfolio,
          id: Date.now()
        }
      ]
    }));
  };

  const updatePortfolio = (id, updatedPortfolio) => {
    setData((prev) => ({
      ...prev,
      portfolio: prev.portfolio.map((item) =>
        item.id === id
          ? { ...item, ...updatedPortfolio }
          : item
      )
    }));
  };

  const deletePortfolio = (id) => {
    setData((prev) => ({
      ...prev,
      portfolio: prev.portfolio.filter(
        (item) => item.id !== id
      )
    }));
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateProfile,
        updateSocial,

        addSkill,
        updateSkill,
        deleteSkill,

        addExperience,
        updateExperience,
        deleteExperience,

        addEducation,
        updateEducation,
        deleteEducation,

        addPortfolio,
        updatePortfolio,
        deletePortfolio
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}