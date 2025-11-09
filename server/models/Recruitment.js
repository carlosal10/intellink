import mongoose from 'mongoose';

const RecruitmentSchema = new mongoose.Schema({
  personal: {
    fullName: String,
    dob: String,
    nationality: String,
    email: String,
    phone: String,
    location: String,
    linkedin: String,
  },
  professional: {
    currentEmployer: String,
    yearsExperience: String,
    industry: String,
    education: String,
    certifications: String,
    languages: String,
  },
  interest: {
    position: String,
    arrangement: String,
    startDate: String,
    compensation: String,
    travel: String,
  },
  skills: {
    expertise: String,
    tools: String,
    projects: String,
    publications: String,
  },
  alignment: {
    missionInterest: String,
    valueAlignment: String,
    crossCultureExperience: String,
  },
  files: {
    cv: String,
    coverLetter: String,
  },
  legal: {
    consent: Boolean,
    declaration: Boolean,
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Recruitment', RecruitmentSchema);
