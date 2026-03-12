export interface Publication {
  id: string
  title: string
  venue: string
  date: string
  year: number
  abstract: string
  tags: string[]
  arxivUrl?: string
  doi?: string
  coAuthored?: boolean
}

export const publications: Publication[] = [
  {
    id: 'spatiotemporal-traffic',
    title:
      'Spatiotemporal Heterogeneity of AI-Driven Traffic Flow Patterns and Land Use Interaction: A GeoAI-Based Analysis of Multimodal Urban Mobility',
    venue: 'arXiv Preprint',
    date: 'Mar 9, 2026',
    year: 2026,
    abstract:
      'Urban traffic flow is governed by the complex, nonlinear interaction between land use configuration and spatiotemporally heterogeneous mobility demand. Conventional global regression and time-series models cannot simultaneously capture these multi-scale dynamics across multiple travel modes. This study proposes a GeoAI Hybrid analytical framework that sequentially integrates Multiscale Geographically Weighted Regression (MGWR), Random Forest (RF), and Spatio-Temporal Graph Convolutional Networks (ST-GCN) to model the spatiotemporal heterogeneity of traffic flow patterns and their interaction with land use across three mobility modes: motor vehicle, public transit, and active transport. Applying the framework to an empirically calibrated dataset of 350 traffic analysis zones across six cities spanning two contrasting urban morphologies, four key findings emerge: (i) the GeoAI Hybrid achieves RMSE of 0.119 and R² of 0.891, outperforming all benchmarks by 23-62%; (ii) SHAP analysis identifies land use mix as the strongest predictor for motor vehicle flows; (iii) DBSCAN clustering identifies five functionally distinct urban traffic typologies with a silhouette score of 0.71; and (iv) cross-city transfer experiments reveal moderate within-cluster transferability (R²≥0.78) and limited cross-cluster generalisability, underscoring the primacy of urban morphological context.',
    tags: ['GeoAI', 'Urban Mobility', 'Multimodal', 'Spatiotemporal Modeling', 'SHAP', 'GCN'],
    arxivUrl: 'https://arxiv.org/abs/2603.05581',
    coAuthored: false,
  },
  {
    id: 'urban-foundation-models',
    title:
      'Urban Spatio-Temporal Foundation Models for Climate-Resilient Housing: Scaling Diffusion Transformers for Disaster Risk Prediction',
    venue: 'arXiv Preprint',
    date: 'Feb 5, 2026',
    year: 2026,
    abstract:
      'Climate hazards increasingly disrupt urban transportation and emergency-response operations by damaging housing stock, degrading infrastructure, and reducing network accessibility. This paper presents Skjold-DiT, a diffusion-transformer framework that integrates heterogeneous spatio-temporal urban data to forecast building-level climate-risk indicators while explicitly incorporating transportation-network structure and accessibility signals relevant to intelligent vehicles. Skjold-DiT combines: (1) Fjell-Prompt, a prompt-based conditioning interface designed to support cross-city transfer; (2) Norrland-Fusion, a cross-modal attention mechanism unifying hazard maps, building attributes, demographics, and transportation infrastructure into a shared latent representation; and (3) Valkyrie-Forecast, a counterfactual simulator for generating probabilistic risk trajectories under intervention prompts. The Baltic-Caspian Urban Resilience (BCUR) dataset includes 847,392 building-level observations across six cities with multi-hazard annotations and transportation accessibility features.',
    tags: ['Foundation Models', 'Diffusion Transformers', 'Climate AI', 'Urban Computing', 'Disaster Risk'],
    arxivUrl: 'https://arxiv.org/abs/2602.06129',
    coAuthored: true,
  },
  {
    id: 'autonomous-housing',
    title:
      'Autonomous AI Agents for Real-Time Affordable Housing Site Selection: Multi-Objective Reinforcement Learning Under Regulatory Constraints',
    venue: 'arXiv Preprint',
    date: 'Feb 3, 2026',
    year: 2026,
    abstract:
      'Affordable housing shortages affect billions, while land scarcity and regulations make site selection slow. We present AURA (Autonomous Urban Resource Allocator), a hierarchical multi-agent reinforcement learning system for real-time affordable housing site selection under hard regulatory constraints (QCT, DDA, LIHTC). AURA uses a regulatory-aware state encoding 127 federal and local constraints, Pareto-constrained policy gradients with feasibility guarantees, and reward decomposition separating immediate costs from long-term social outcomes. On datasets from 8 U.S. metros (47,392 candidate parcels), AURA attains 94.3% regulatory compliance and improves Pareto hypervolume by 37.2% over strong baselines. In a New York City 2026 case study, it reduces selection time from 18 months to 72 hours and identifies 23% more viable sites, with 31% better transit access and 19% lower environmental impact than expert picks.',
    tags: ['Reinforcement Learning', 'Autonomous Agents', 'Urban AI', 'Multi-Objective Optimization', 'Housing'],
    arxivUrl: 'https://arxiv.org/abs/2602.03940',
    coAuthored: true,
  },
  {
    id: 'multi-fidelity-pinns',
    title:
      'Multi-Fidelity Physics-Informed Neural Networks with Bayesian Uncertainty Quantification and Adaptive Residual Learning for Efficient Solution of Parametric Partial Differential Equations',
    venue: 'arXiv Preprint',
    date: 'Feb 1, 2026',
    year: 2026,
    abstract:
      'Physics-informed neural networks (PINNs) have emerged as a powerful paradigm for solving partial differential equations (PDEs) by embedding physical laws directly into neural network training. However, solving high-fidelity PDEs remains computationally prohibitive, particularly for parametric systems requiring multiple evaluations across varying parameter configurations. This paper presents MF-BPINN, a novel multi-fidelity framework that synergistically combines physics-informed neural networks with Bayesian uncertainty quantification and adaptive residual learning. Our approach leverages abundant low-fidelity simulations alongside sparse high-fidelity data through a hierarchical neural architecture that learns nonlinear correlations across fidelity levels. We introduce an adaptive residual network with learnable gating mechanisms that dynamically balances linear and nonlinear fidelity discrepancies, and develop a rigorous Bayesian framework employing Hamiltonian Monte Carlo for principled uncertainty estimation.',
    tags: ['Physics-Informed ML', 'Bayesian Methods', 'Uncertainty Quantification', 'PDEs', 'Scientific ML'],
    arxivUrl: 'https://arxiv.org/abs/2602.01176',
    coAuthored: false,
  },
  {
    id: 'neuromorphic-edge',
    title:
      'Energy-Efficient Neuromorphic Computing for Edge AI: A Comprehensive Framework with Adaptive Spiking Neural Networks and Hardware-Aware Optimization',
    venue: 'arXiv Preprint',
    date: 'Feb 1, 2026',
    year: 2026,
    abstract:
      'This paper presents NeuEdge, a comprehensive neuromorphic computing framework integrating adaptive spiking neural networks with hardware-aware optimization for efficient edge AI deployment. We introduce a novel temporal coding scheme combining rate and temporal spike patterns, enabling robust feature representation with 4.7× fewer spikes than conventional approaches. Our hardware-aware training methodology co-optimizes network architecture and on-chip mapping, achieving 89% hardware utilization on neuromorphic processors. An adaptive threshold mechanism dynamically adjusts neuron firing based on input statistics, reducing energy consumption by 67% while maintaining 96.2% classification accuracy. NeuEdge achieves 847 GOp/s/W energy efficiency, 2.3 ms inference latency on edge devices, and 91-96% accuracy across vision and audio classification tasks, with 312× energy improvement over traditional deep neural networks on a simulated autonomous drone platform.',
    tags: ['Neuromorphic Computing', 'Edge AI', 'Spiking Neural Networks', 'Hardware-Aware ML'],
    arxivUrl: 'https://arxiv.org/abs/2602.02439',
    coAuthored: true,
  },
  {
    id: 'patchformer',
    title:
      'PatchFormer: A Patch-Based Time Series Foundation Model with Hierarchical Masked Reconstruction and Cross-Domain Transfer Learning for Zero-Shot Multi-Horizon Forecasting',
    venue: 'arXiv Preprint',
    date: 'Jan 28, 2026',
    year: 2026,
    abstract:
      'We introduce PatchFormer, a patch-based time series foundation model that uses hierarchical masked reconstruction for self-supervised pretraining and lightweight adapters for efficient transfer. PatchFormer segments time series into patches and learns multiscale temporal representations with learnable aggregation across temporal scales. Pretraining uses masked patch reconstruction with dynamic masking and objectives that encourage both local accuracy and global consistency, followed by cross-domain knowledge distillation. Experiments on 24 benchmark datasets spanning weather, energy, traffic, finance, and healthcare demonstrate state-of-the-art zero-shot multi-horizon forecasting, reducing mean squared error by 27.3% relative to strong baselines while requiring 94% less task-specific training data. The model exhibits near log-linear scaling with more pretraining data up to 100 billion points and processes length-512 sequences 3.8× faster than full-sequence transformers.',
    tags: ['Time Series', 'Foundation Models', 'Transfer Learning', 'Forecasting', 'Transformers'],
    arxivUrl: 'https://arxiv.org/abs/2601.20845',
    coAuthored: true,
  },
  {
    id: 'transparency-medical-lm',
    title:
      'Transparency-First Medical Language Models: Datasheets, Model Cards, and End-to-End Data Provenance for Clinical NLP',
    venue: 'arXiv Preprint',
    date: 'Jan 27, 2026',
    year: 2026,
    abstract:
      'We introduce TeMLM, a set of transparency-first release artifacts for clinical language models. TeMLM unifies provenance, data transparency, modeling transparency, and governance into a single, machine-checkable release bundle. We define an artifact suite (TeMLM-Card, TeMLM-Datasheet, TeMLM-Provenance) and a lightweight conformance checklist for repeatable auditing. We instantiate the artifacts on Technetium-I, a large-scale synthetic clinical NLP dataset with 498,000 notes and 7.74M PHI entity annotations across 10 types, reporting reference results for ProtactiniumBERT (~100M parameters) on PHI de-identification and ICD-9 code extraction. We emphasize that synthetic benchmarks are valuable for tooling and process validation, but models should be validated on real clinical data prior to deployment.',
    tags: ['Clinical NLP', 'Medical LLMs', 'Transparency', 'Data Provenance', 'Trustworthy AI', 'Governance'],
    arxivUrl: 'https://arxiv.org/abs/2601.19191',
    coAuthored: true,
  },
  {
    id: 'vehicle-routing-gnn',
    title:
      'Hierarchical Attention-Enhanced Graph Neural Networks with Deep Reinforcement Learning for Large-Scale Stochastic Vehicle Routing Problems: A Multi-Agent Framework with Theoretical Guarantees',
    venue: 'arXiv Preprint',
    date: 'Jan 27, 2026',
    year: 2026,
    abstract:
      'This paper presents HAT-GNN-RL, a novel hierarchical attention-enhanced graph neural network architecture integrated with deep reinforcement learning for solving stochastic vehicle routing problems at scale. Our framework introduces a multi-level attention mechanism capturing structural patterns at node, route, and fleet levels simultaneously, enabling effective generalisation to instances with 500+ customers. We develop a curriculum learning strategy with progressive problem complexity exposure, coupled with a priority experience replay mechanism weighted by solution quality improvements. Experiments on CVRP, VRPTW, and SVRP benchmarks demonstrate HAT-GNN-RL achieves solutions within 0.8-2.3% of known optima on 100-500 node problems while reducing computation time by 94-97% compared to exact solvers. On real-world Vienna city delivery data with stochastic demands, the approach reduces delivery delays by 88% and improves vehicle utilisation by 34%.',
    tags: ['Graph Neural Networks', 'Reinforcement Learning', 'Combinatorial Optimization', 'Vehicle Routing'],
    arxivUrl: '#',
    coAuthored: false,
  },
  {
    id: 'catastrophic-forgetting',
    title:
      'Mechanistic Analysis of Catastrophic Forgetting in Large Language Models During Continual Fine-tuning',
    venue: 'arXiv Preprint',
    date: 'Jan 26, 2026',
    year: 2026,
    abstract:
      'We present a comprehensive mechanistic analysis of catastrophic forgetting in transformer-based LLMs during sequential fine-tuning. Through systematic experiments across multiple model scales (1B to 400B total parameters) and task sequences, we identify three primary mechanisms driving forgetting: gradient interference in attention weights, representational drift in intermediate layers, and loss landscape flattening. Forgetting severity correlates strongly with task similarity (Pearson r = 0.87) and gradient alignment metrics. Our analysis reveals that approximately 15-23% of attention heads undergo severe disruption during fine-tuning, with lower layers showing greater susceptibility. These findings establish mechanistic foundations for developing targeted mitigation strategies in continual learning systems.',
    tags: ['LLMs', 'Continual Learning', 'Mechanistic Interpretability', 'Catastrophic Forgetting', 'Fine-tuning'],
    arxivUrl: 'https://arxiv.org/abs/2601.18699',
    coAuthored: false,
  },
  {
    id: 'sdlm',
    title:
      'Strategic Doctrine Language Models (sdLM): A Learning-System Framework for Doctrinal Consistency and Geopolitical Forecasting',
    venue: 'arXiv Preprint',
    date: 'Jan 21, 2026',
    year: 2026,
    abstract:
      'We introduce Strategic Doctrine Language Models (sdLM), a learning-system framework for multi-document strategic reasoning with doctrinal consistency constraints and calibrated uncertainty. The approach combines multi-document attention, temporal encoding, and a doctrine-consistency layer to improve long-horizon forecasting and plan plausibility while reducing severe doctrinal violations. Evaluation uses: (i) expert-panel scoring of strategic scenarios (N=47); (ii) doctrine consistency on 336 doctrine publications (12,847 statements); and (iii) geopolitical forecasting on 127 historical counterfactuals (1945-2020) across 12-60 month horizons. sdLM achieves higher strategic quality and better calibration than strong general-purpose LLM baselines, and remains competitive with human experts on long-horizon judgments.',
    tags: ['Strategic AI', 'LLMs', 'Geopolitical Forecasting', 'Doctrinal AI', 'Calibration'],
    arxivUrl: 'https://arxiv.org/abs/2601.14862',
    coAuthored: true,
  },
  {
    id: 'fetal-ultrasound-xai',
    title: 'Uncertainty-Calibrated Explainable AI for Fetal Ultrasound Plane Classification',
    venue: 'arXiv Preprint',
    date: 'Jan 2, 2026',
    year: 2026,
    abstract:
      'Fetal ultrasound standard-plane classification underpins reliable prenatal biometry and anomaly screening, yet real-world deployment is limited by domain shift, image noise, and poor calibration of predicted probabilities. This paper presents a practical framework for uncertainty-calibrated explainable AI in fetal plane classification. We synthesize uncertainty estimation methods, Monte Carlo dropout, deep ensembles, evidential learning, and conformal prediction, with post-hoc and uncertainty-aware explanations (Grad-CAM variants, LIME-style local surrogates, and uncertainty-weighted multi-resolution activation maps), mapped to a clinician-facing workflow. Using FETAL_PLANES_DB as a reference benchmark, we define a reporting protocol coupling accuracy with calibration and selective prediction, including expected calibration error, Brier score, coverage-risk curves, and structured error analysis. Integration points for quality control and human-in-the-loop review are discussed, where uncertainty flags trigger re-acquisition or expert confirmation.',
    tags: ['Medical Imaging', 'XAI', 'Fetal Ultrasound', 'Uncertainty Quantification', 'Human-in-the-Loop', 'Calibration'],
    arxivUrl: 'https://arxiv.org/abs/2601.00990',
    coAuthored: false,
  },
]
