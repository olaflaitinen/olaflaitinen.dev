export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  startDate: string
  endDate: string
  highlights: string[]
}

export const education: Education[] = [
  {
    id: 'dtu-phd',
    degree: 'PhD',
    field: 'Human-XAI Collaboration for Improved Fetal Ultrasound Imaging',
    institution: 'Technical University of Denmark',
    startDate: 'Feb 2025',
    endDate: 'Mar 2028',
    highlights: [
      'Research on human-AI collaboration and interactive machine learning',
      'Explainable AI for clinical ultrasound interpretation',
      'Cognitive aspects of AI-assisted diagnostic tasks',
      'Usability studies and human factors evaluation',
      'MSc student supervision and co-mentoring',
      'Publications linked to collaborative and transparent AI',
    ],
  },
  {
    id: 'luxembourg-phd',
    degree: 'PhD',
    field: 'Systems and Molecular Biomedicine',
    institution: 'University of Luxembourg',
    startDate: 'Feb 2025',
    endDate: 'Jan 2028',
    highlights: [
      'Predictive modeling of cellular and molecular systems',
      'Computational biology and multi-omics pipeline development',
      'Precision medicine tooling and biomarker discovery',
      'Molecular interaction network analysis',
      'Cross-institutional research collaboration',
    ],
  },
  {
    id: 'liu-ms',
    degree: 'MS',
    field: 'Statistics and Machine Learning',
    institution: 'Linköping University',
    startDate: 'Aug 2024',
    endDate: 'Feb 2026',
    highlights: [
      'Applied statistics and probabilistic modeling',
      'Deep learning and Bayesian networks',
      'Reproducibility and evaluation methodology',
      'Time-series analysis and forecasting',
      'Real-world predictive analytics projects',
    ],
  },
  {
    id: 'tuni-bs',
    degree: 'BS',
    field: 'Computing and Electrical Engineering',
    institution: 'Tampere University',
    startDate: 'Aug 2021',
    endDate: 'Jun 2024',
    highlights: [
      'Computing, electronics, and embedded systems',
      'Robotics, autonomous navigation, and signal processing',
      'Applied AI and machine learning coursework',
      'Interdisciplinary engineering design projects',
    ],
  },
  {
    id: 'ish-ib',
    degree: 'High School Diploma',
    field: 'International Baccalaureate',
    institution: 'International School of Helsinki',
    startDate: 'Jul 2019',
    endDate: 'Jun 2021',
    highlights: [
      'Higher-level Mathematics and Biology',
      'Extended essay in data analysis and research writing',
      'Robotics and AI workshops',
      'Peer mentoring and scientific presentation',
    ],
  },
]
