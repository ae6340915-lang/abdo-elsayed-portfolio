export const projectsData = [
  {
    id: "motor-fault-diagnosis",
    number: "01",
    visualType: "motor",
    title: {
      en: "Industrial Motor Fault Diagnosis",
      ar: "تشخيص أعطال المحركات الصناعية"
    },
    category: {
      en: "Machine Learning | Multi-Class Classification",
      ar: "تعلم آلي | تصنيف متعدد الفئات"
    },
    description: {
      en: "A machine learning classification project focused on analyzing sensor-based data and identifying different operating conditions of an industrial motor.",
      ar: "مشروع تصنيف باستخدام التعلم الآلي يركز على تحليل بيانات الحساسات وتحديد حالات التشغيل المختلفة للمحرك الصناعي بدقة."
    },
    datasetSummary: {
      en: "58,509 records • 48 features • 11 operating classes",
      ar: "58,509 سجل • 48 خاصية • 11 فئة تشغيلية"
    },
    datasetStats: [
      { labelEn: "Records", labelAr: "السجلات", value: "58,509" },
      { labelEn: "Features", labelAr: "الخصائص", value: "48" },
      { labelEn: "Target Classes", labelAr: "الفئات المستهدفة", value: "11" },
      { labelEn: "Modality", labelAr: "نوع البيانات", value: "Telemetry Sensors" }
    ],
    keyFocus: {
      en: ["Data Analysis", "Data Preprocessing", "Classification", "Model Evaluation", "Error Analysis"],
      ar: ["تحليل البيانات", "معالجة البيانات", "التصنيف", "تقييم النماذج", "تحليل الأخطاء"]
    },
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/ae6340915-lang/industrial-motor-fault-diagnosis",
    caseStudy: {
      overview: {
        en: "Industrial motors serve as critical mechanical assets in manufacturing pipelines. Unplanned downtime due to mechanical or electrical faults causes severe operational bottlenecks. This project develops a systematic machine learning workflow to classify 11 distinct operational states using high-dimensional sensory readings.",
        ar: "تعد المحركات الصناعية من الأصول الميكانيكية الحيوية في خطوط الإنتاج والتصنيع. يؤدي التوقف المفاجئ للمعدات نتيجة أعطال كهربائية أو ميكانيكية إلى خسائر تشغيلية فادحة. يقوم هذا المشروع بتطوير مسار عمل متكامل للتعلم الآلي لتصنيف 11 حالة تشغيلية مميزة استناداً إلى قراءات حساسات عالية الأبعاد."
      },
      problemStatement: {
        en: "Detecting anomalous vibrations, current spikes, and rotor imbalances in industrial machinery requires moving beyond simple threshold alerts toward multi-class predictive diagnostic models that accurately discriminate between subtle fault types.",
        ar: "إن الكشف عن الاهتزازات غير الطبيعية، والتقلبات في التيار الكهربائي، واختلالات العضو الدوار في المعدات الصناعية يتطلب تجاوز التنبيهات البسيطة نحو نماذج تشخيصية متعددة الفئات قادرة على التمييز الدقيق بين أنماط الأعطال المختلفة."
      },
      objective: {
        en: "To preprocess 48 multivariate sensor features, analyze data distributions, train multi-class classifiers, evaluate performance against imbalanced operating modes, and inspect confusion patterns across machine states.",
        ar: "معالجة 48 خاصية حساسة متعددة المتغيرات، وتحليل توزيعات البيانات، وتدريب نماذج تصنيف متعددة الفئات، وتقييم الأداء عبر أنماط التشغيل المختلفة وفحص مصفوفة الالتباس بين حالات الماكينة."
      },
      dataset: {
        en: "The dataset comprises 58,509 observations captured from industrial motor bench experiments. Each observation contains 48 continuous features measuring acceleration, temperature, rotational velocity, and electric current across 11 discrete machine condition classes.",
        ar: "تحتوي مجموعة البيانات على 58,509 عينة تم التقاطها من منصات اختبار المحركات الصناعية. يتضمن كل سجل 48 خاصية مستمرة تقيس التسارع، ودرجات الحرارة، والسرعة الزاوية، والتيار الكهربائي عبر 11 فئة مختلفة لحالة المحرك."
      },
      eda: {
        en: "Exploratory data analysis revealed high correlation clusters among vibration axis channels, varying variance across sensor groups, and class distribution characteristics that necessitated robust scaling and stratified splitting.",
        ar: "كشف الاستكشاف التحليلي للبيانات عن وجود ارتباطات وثيقة بين قنوات قياس محاور الاهتزاز، وتباينات ملحوظة في نطاقات الحساسات المختلفة، مما استدعى استخدام تقنيات تسوية متقدمة وتقسيم طبقي للعينات."
      },
      preprocessing: {
        en: "Workflow included missing value verification, standard outlier bounding, standard feature scaling (StandardScaler) to prevent magnitude bias in gradient and distance computations, and stratified 80/20 train-test partitioning.",
        ar: "شملت مرحلة المعالجة التحقق من القيم المفقودة، وفحص القيم المتطرفة، وتوحيد مقاييس الخصائص (StandardScaler) لمنع انحياز النماذج نحو المتغيرات ذات القيم الأكبر، مع تقسيم طبقي للبيانات بنسبة 80/20."
      },
      methodology: {
        en: "Adopted a structured ML baseline-to-advanced progression: commencing with linear benchmarks, progressing to decision tree ensembles (Random Forest) and gradient boosted estimators, followed by detailed hyperparameter refinement.",
        ar: "اعتمد منهج العمل على التدرج المنطقي من النماذج الخطية المرجعية وصولاً إلى مجموعات أشجار القرار (Random Forest) ونماذج تعزيز التدرج (Gradient Boosting) متبوعة بضبط المعاملات الفائقة."
      },
      modelExperiments: {
        en: "Experimented with multiple estimators: Logistic Regression (baseline), Support Vector Machines with RBF kernel, and Random Forest Classifiers with varying tree depths and feature sub-sampling parameters.",
        ar: "تمت تجربة نماذج متعددة: الانحدار اللوجستي (كنموذج مرجعي)، وآلات المتجهات الداعمة (SVM) بنواة RBF، والغابات العشوائية (Random Forest) مع اختبار أعماق مختلفة للأشجار وخصائص التوزيع."
      },
      evaluationMetrics: {
        en: "Evaluated using Multi-class Accuracy, Macro and Weighted F1-scores, Precision, Recall per operating state, and comprehensive Confusion Matrix inspections to detect class overlaps.",
        ar: "تم التقييم باستخدام الدقة الكلية (Accuracy)، ومقاييس F1-Score (الكلي والطبقي)، ومعدلات الدقة (Precision) والاسترجاع (Recall) لكل فئة، مع تحليل شامل لمصفوفة الالتباس."
      },
      results: {
        en: "Demonstrated strong discrimination capability across all 11 motor conditions. Tree-based ensemble structures captured complex non-linear sensor boundaries effectively while maintaining balanced recall across rare failure modes.",
        ar: "أظهرت النماذج قدرة فائقة على التمييز بين جميع حالات المحرك الـ 11. تمكنت النماذج القائمة على الأشجار من استيعاب العلاقات غير الخطية المعقدة بين الحساسات مع الحفاظ على توازن الاسترجاع للحالات النادرة."
      },
      challenges: {
        en: "Navigating high sensor feature dimensionality, managing overlapping vibration signatures between adjacent mechanical bearing wear stages, and ensuring computation efficiency across 58k+ samples.",
        ar: "التعامل مع الأبعاد المرتفعة لخصائص الحساسات، والتمييز بين الإشارات الاهتزازية المتشابهة لتآكل المحامل المتقاربة، وضمان كفاءة الحوسبة على أكثر من 58 ألف سجل."
      },
      keyInsights: {
        en: "Specific frequency-domain derived sensor features contributed disproportionately to fault detection, indicating that selective feature prioritization can optimize computational overhead in real-time edge monitoring.",
        ar: "ساهمت خصائص معينة مشتقة من مجالات الترددات بشكل كبير في الكشف عن الأعطال، مما يوضح أن الانتقاء الذكي للخصائص يمكنه تسريع عمليات المراقبة الآنية في البيئات الصناعية."
      },
      lessonsLearned: {
        en: "Emphasized the critical importance of domain-aware error inspection: treating misclassifications between benign and catastrophic failure states with unequal operational weight rather than relying solely on global accuracy.",
        ar: "أكدت التجربة على أهمية تقييم الأخطاء بناءً على طبيعة المجال الصناعي: فالتفريق بين الأعطال البسيطة والحرجة يجب أن يحظى بأولويات مختلفة بدلاً من الاعتماد الأعمى على رقم الدقة الإجمالي."
      }
    }
  },
  {
    id: "dry-bean-classification",
    number: "02",
    visualType: "bean",
    title: {
      en: "Dry Bean Classification",
      ar: "تصنيف أصناف الفاصوليا الجافة"
    },
    category: {
      en: "Machine Learning | Multi-Class Classification",
      ar: "تعلم آلي | تصنيف متعدد الفئات"
    },
    description: {
      en: "Analyzed morphological characteristics of dry bean samples and developed a machine learning classification workflow to distinguish between different bean varieties.",
      ar: "تحليل الخصائص المورفولوجية والشكلية لعينات الفاصوليا وتطوير مسار تعلم آلي للتمييز الدقيق بين الأصناف المختلفة."
    },
    datasetSummary: {
      en: "13,611 records • 16 geometric features • 7 bean varieties",
      ar: "13,611 سجل • 16 خاصية هندسية • 7 أصناف"
    },
    datasetStats: [
      { labelEn: "Records", labelAr: "السجلات", value: "13,611" },
      { labelEn: "Features", labelAr: "الخصائص", value: "16" },
      { labelEn: "Classes", labelAr: "الأصناف", value: "7" },
      { labelEn: "Data Type", labelAr: "نوع البيانات", value: "Computer Vision Geometry" }
    ],
    keyFocus: {
      en: ["Exploratory Data Analysis", "Data Preprocessing", "Feature Analysis", "SVC", "Model Evaluation"],
      ar: ["تحليل استكشافي", "معالجة البيانات", "تحليل الخصائص", "دعم المتجهات SVC", "تقييم النماذج"]
    },
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/ae6340915-lang/dry-bean-classification",
    caseStudy: {
      overview: {
        en: "Agricultural grain classification requires objective automated inspection methods to replace laborious manual sorting. Using high-resolution image-derived morphological features, this project establishes a machine learning framework to identify 7 registered bean cultivars.",
        ar: "يتطلب فرز المحاصيل الزراعية أساليب آلية موضوعية تحل محل الفرز اليدوي المستهلك للوقت. استناداً إلى الخصائص الهندسية والمورفولوجية المستخلصة من الصور عالية الدقة، يؤسس هذا المشروع إطار عمل تعلم آلي لتصنيف 7 أصناف معتمدة من الفاصوليا."
      },
      problemStatement: {
        en: "Certain dry bean varieties possess very subtle differences in aspect ratio, eccentricity, and roundness, making visual distinction challenging and prone to sorting inaccuracies in commercial packaging.",
        ar: "تتسم بعض أصناف الفاصوليا الجافة بتقارب كبير في نسب الأبعاد والاستدارة والشكل الخارجي، مما يجعل التمييز البصري بينها صعباً ومعرضاً للخطأ أثناء عمليات التعبئة والتصنيف التجاري."
      },
      objective: {
        en: "To analyze geometric and shape descriptors (area, perimeter, compactness, convexity), evaluate non-linear multi-class decision surfaces using Support Vector Classifiers (SVC), and understand misclassifications between morphologically similar species.",
        ar: "تحليل المحددات الشكلية والهندسية (المساحة، المحيط، الاستدارة، التحدب)، وتقييم أسطح اتخاذ القرار غير الخطية باستخدام مصنفات المتجهات الداعمة (SVC)، وتفسير أسباب التداخل بين الأصناف المتقاربة."
      },
      dataset: {
        en: "13,611 grains comprising 7 cultivars: Seker, Barbunya, Bombay, Cali, Dermason, Horoz, and Sira. Features comprise 12 geometric dimensions and 4 shape factors extracted from computer vision segmentation.",
        ar: "13,611 عينة تشمل 7 أصناف: Seker و Barbunya و Bombay و Cali و Dermason و Horoz و Sira. تتضمن البيانات 12 بعداً هندسياً و 4 معاملات شكلية مستخرجة بالرؤية الحاسوبية."
      },
      eda: {
        en: "Correlation matrix and pair-plot inspections demonstrated that Bombay is readily separable due to its disproportionate area, whereas Dermason and Sira exhibit high morphological overlap requiring non-linear separation kernels.",
        ar: "أظهرت مصفوفات الارتباط والمخططات المزدوجة أن صنف Bombay يمكن فصله بسهولة لكبر مساحته، بينما يتداخل صنف Dermason وصنف Sira بشكل كبير مما يتطلب دوال نوى غير خطية للفصل بينهما."
      },
      preprocessing: {
        en: "Standardization using RobustScaler to minimize sensitivity to extreme shape outliers, verification of zero missing records, and stratified multi-split validation folds.",
        ar: "تمت تسوية البيانات باستخدام RobustScaler لتقليل الحساسية تجاه الشواذ الهندسية، مع التحقق من خلو البيانات من أي قيم مفقودة، وتطبيق التحقق المتقاطع الطبقي."
      },
      methodology: {
        en: "Benchmarked Linear and Radial Basis Function (RBF) Support Vector Machines against decision tree ensembles, systematically tuning soft-margin cost (C) and kernel coefficient (gamma).",
        ar: "تمت مقارنة نماذج آلات المتجهات الداعمة الخطية وذات النواة الشعاعية (RBF SVC) مع أشجار القرار، مع التحسين المنهجي لمعامل التكلفة (C) ومعامل النواة (gamma)."
      },
      modelExperiments: {
        en: "Tested baseline linear models, polynomial kernels, and radial basis functions, tracking computational cost versus classification fidelity.",
        ar: "تم اختبار النماذج الخطية، ونوى كثيرات الحدود، ونواة الأساس الشعاعي، مع متابعة الموازنة بين وقت الحوسبة ودقة التصنيف."
      },
      evaluationMetrics: {
        en: "Class-level Precision, Recall, Macro-F1 score, and normalized Confusion Matrices visualizing inter-variety mispredictions.",
        ar: "تم قياس الدقة والاسترجاع على مستوى كل صنف، ومقياس Macro-F1، ومصفوفات الالتباس المعيارية لرصد التنبؤات الخاطئة بين الأصناف."
      },
      results: {
        en: "SVC with RBF kernel formed smooth geometric boundaries, effectively distinguishing cultivars with distinct aspect ratios while maintaining reliable classification for overlapping categories.",
        ar: "شكلت خوارزمية SVC ذات نواة RBF حدوداً هندسية مرنة وفعالة، مكنتها من عزل الأصناف بوضوح مع تقديم تنبؤات متوازنة للأصناف المتداخلة شكلياً."
      },
      challenges: {
        en: "Resolving boundary overlap between Sira and Dermason varieties that share closely aligned perimeter-to-area proportions.",
        ar: "معالجة التداخل المورفولوجي الدقيق بين صنفي Sira و Dermason بسبب تقارب نسب المحيط إلى المساحة بينهما."
      },
      keyInsights: {
        en: "Non-dimensional shape factors (compactness and eccentricity) provided greater predictive resilience than raw pixel scale dimensions across varied lighting/segmentation artifacts.",
        ar: "وفرت المعاملات الشكلية الخالية من الأبعاد (كالاستدارة والمصمتية) متانة تنبؤية أعلى بكثير من الأبعاد المطلقة بالبكسل تجاه تغير ظروف التصوير."
      },
      lessonsLearned: {
        en: "Engineered shape factor ratios often hold substantially more discriminative power than raw scalar dimensions in morphological modeling.",
        ar: "النسب والمعاملات المستخلصة هندسياً تحمل غالباً قوة تمييزية وتفسيرية تفوق المقاييس الأولية المباشرة في النمذجة المورفولوجية."
      }
    }
  },
  {
    id: "food-ordering-analysis",
    number: "03",
    visualType: "food",
    title: {
      en: "Online Food Ordering Analysis",
      ar: "تحليل طلبات الطعام عبر الإنترنت"
    },
    category: {
      en: "Data Analysis | Machine Learning",
      ar: "تحليل بيانات | تعلم آلي"
    },
    description: {
      en: "Explored online food ordering data, investigated customer-related patterns, prepared features, and applied Logistic Regression to predict the target outcome.",
      ar: "استكشاف بيانات طلبات الطعام عبر التطبيقات، ودراسة أنماط العملاء وسلوكياتهم، وإعداد الخصائص وتطبيق الانحدار اللوجستي للتنبؤ بالقرارات."
    },
    datasetSummary: {
      en: "Customer demographic, educational, income, and feedback indicators",
      ar: "مؤشرات العملاء الديموغرافية والتعليمية والدخل والملاحظات"
    },
    datasetStats: [
      { labelEn: "Target Type", labelAr: "طبيعة الهدف", value: "Binary Classification" },
      { labelEn: "Attributes", labelAr: "المتغيرات", value: "Demographic & Behavioral" },
      { labelEn: "Model", labelAr: "النموذج", value: "Logistic Regression" },
      { labelEn: "Primary Focus", labelAr: "التركيز الرئيسي", value: "Pattern Discovery" }
    ],
    keyFocus: {
      en: ["Data Cleaning", "Exploratory Data Analysis", "Feature Encoding", "Logistic Regression", "Model Evaluation"],
      ar: ["تنظيف البيانات", "تحليل استكشافي", "ترميز الخصائص", "الانحدار اللوجستي", "تقييم النماذج"]
    },
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn"],
    githubUrl: "https://github.com/ae6340915-lang/online-food-ordering-analysis",
    caseStudy: {
      overview: {
        en: "Consumer engagement in on-demand food delivery platforms is driven by demographic tendencies, financial flexibility, and satisfaction ratings. This study analyzes customer survey data to model and predict repeat ordering inclinations.",
        ar: "يتأثر إقبال العملاء على منصات توصيل الطعام بالعوامل الديموغرافية، ومستويات الدخل، وتقييمات الرضا. تهدف هذه الدراسة إلى تحليل استبيانات وسلوكيات المستهلكين ونمذجة احتمالية تكرار الطلب."
      },
      problemStatement: {
        en: "Food delivery businesses require granular insights into why certain customer segments churn or refrain from reordering, requiring interpretable modeling rather than black-box approximations.",
        ar: "تحتاج شركات توصيل الطعام إلى رؤى تحليلية دقيقة حول أسباب توقف بعض شرائح العملاء عن الشراء، مما يستوجب استخدام نماذج تفسيرية واضحة المعالم بدلاً من الخوارزميات المعقدة غير القابلة للشرح."
      },
      objective: {
        en: "To systematically clean tabular survey responses, encode nominal and ordinal features, uncover demographic correlation patterns, train an interpretable Logistic Regression model, and interpret coefficient directions.",
        ar: "تنظيف استجابات الاستبيانات جدولياً، وترميز المتغيرات الاسمية والرتبية، واستكشاف العلاقات الديموغرافية، وتدريب نموذج انحدار لوجستي واضح وتفسير معاملات التأثير لكل متغير."
      },
      dataset: {
        en: "Survey data containing customer attributes including age, gender, marital status, monthly income bracket, educational qualifications, family size, customer feedback ratings, and the target repeat-order status.",
        ar: "بيانات استقصائية تشمل سمات المستهلكين مثل العمر، والجنس، والحالة الاجتماعية، ومستوى الدخل الشهري، والمستوى التعليمي، وحجم الأسرة، ومؤشرات الرضا، وحالة إعادة الطلب."
      },
      eda: {
        en: "Conducted bivariate distributions exploring relationship between monthly income and ordering frequency, pinpointing significant positive correlations between higher education / income levels and continuous platform utilization.",
        ar: "إجراء تحليلات توزيع ثنائية المتغيرات لاستكشاف العلاقة بين الدخل الشهري وتكرار الطلب، وتحديد وجود علاقات إيجابية واضحة بين المستويات التعليمية والدخل واستمرارية استخدام المنصة."
      },
      preprocessing: {
        en: "Applied One-Hot Encoding for nominal variables (marital status, occupation), ordinal mapping for educational qualifications and income strata, and scaled continuous fields via MinMaxScaler.",
        ar: "تطبيق الترميز الأحادي (One-Hot Encoding) للمتغيرات الاسمية (المهنة، الحالة الاجتماعية)، والترتيب الرقمي للمستويات التعليمية والدخل، وتسوية الحقول المستمرة عبر MinMaxScaler."
      },
      methodology: {
        en: "Formulated a binary classification experiment centered on Logistic Regression for its probabilistic interpretability and log-odds coefficient transparency.",
        ar: "تصميم تجربة تصنيف ثنائي ترتكز على الانحدار اللوجستي نظراً لقدرته على تقديم احتمالات واضحة وشفافية حساب معاملات التأثير (Log-odds)."
      },
      modelExperiments: {
        en: "Evaluated L1 (Lasso) and L2 (Ridge) regularization penalties to identify feature coefficients that shrink to zero versus those retaining persistent predictive signals.",
        ar: "تمت تجربة تقنيات الانتظام L1 و L2 لمعاينة الخصائص التي تتقلص معاملاتها إلى الصفر مقابل تلك التي تحافظ على قوة تنبؤية مستقرة."
      },
      evaluationMetrics: {
        en: "ROC-AUC curves, Precision-Recall balance, Classification Accuracy, and Log-Loss calibration curves.",
        ar: "منحنيات ROC-AUC، وتوازن الدقة والاسترجاع (Precision-Recall)، والدقة العامة، ومقاييس معايرة الاحتمالات (Log-Loss)."
      },
      results: {
        en: "The calibrated Logistic Regression model achieved balanced probability estimates, clearly identifying customer satisfaction feedback and household size as decisive reordering predictors.",
        ar: "حقق نموذج الانحدار اللوجستي تقديرات احتمالية متزنة، وأبرز بوضوح أن مؤشرات رضا العميل وحجم الأسرة هما العاملان الأكثر حسماً في تكرار عمليات الطلب."
      },
      challenges: {
        en: "Handling categorical cardinality and addressing class imbalance in feedback scoring where overwhelmingly satisfied reviews skewed standard loss functions.",
        ar: "التعامل مع تنوع الفئات وتفاوت نسب الاستجابات الإيجابية العالية التي تؤثر على دقة دالات الخسارة التقليدية."
      },
      keyInsights: {
        en: "Positive qualitative feedback proved to have a substantially higher positive log-odds impact on reordering than discounted pricing or minor delivery duration variances.",
        ar: "أثبتت مؤشرات التقييم النوعي الإيجابي أن لها تأثيراً مضاعفاً على احتمالية تكرار الطلب مقارنة بالعروض الترويجية أو الفروقات البسيطة في وقت التوصيل."
      },
      lessonsLearned: {
        en: "Model interpretability is paramount in business analytics: knowing precisely why a customer is inclined to reorder provides actionable guidance for product and operations teams.",
        ar: "القدرة التفسيرية للنموذج توازي دقته في تحليلات الأعمال: ففهم الدوافع الحقيقية وراء سلوك العميل يوفر توجيهات عملية قابلة للتنفيذ لفرق المنتجات والعمليات."
      }
    }
  },
  {
    id: "mena-air-quality",
    number: "04",
    visualType: "air",
    title: {
      en: "MENA Air Quality Analysis",
      ar: "تحليل جودة الهواء في الشرق الأوسط وشمال أفريقيا"
    },
    category: {
      en: "Data Analysis | Data Visualization",
      ar: "تحليل بيانات | تصور البيانات"
    },
    description: {
      en: "Analyzed PM2.5 air pollution data across the Middle East and North Africa to explore geographic differences, pollution patterns, and changes over time.",
      ar: "تحليل بيانات تلوث الهواء بجزيئات PM2.5 الدقيقة في منطقة الشرق الأوسط وشمال أفريقيا لاستكشاف الفروق الجغرافية، والأنماط الزمنية والتغيرات السنوية."
    },
    datasetSummary: {
      en: "Multi-year PM2.5 particulate concentration measurements across MENA territories",
      ar: "قياسات تركيز جسيمات PM2.5 لعدة سنوات عبر دول الشرق الأوسط وشمال أفريقيا"
    },
    datasetStats: [
      { labelEn: "Metric", labelAr: "المؤشر", value: "PM2.5 Concentration (μg/m³)" },
      { labelEn: "Region", labelAr: "المنطقة", value: "MENA Countries" },
      { labelEn: "Platform", labelAr: "أداة العرض", value: "Tableau Visual Analytics" },
      { labelEn: "Dimension", labelAr: "الأبعاد", value: "Spatial & Temporal" }
    ],
    keyFocus: {
      en: ["Geographic Analysis", "Data Visualization", "Trend Analysis", "Country Comparisons", "Dashboard Design"],
      ar: ["تحليل جغرافي", "تصور البيانات", "تحليل الاتجاهات", "مقارنة الدول", "تصميم لوحات التحكم"]
    },
    technologies: ["Tableau", "Excel", "Data Modeling"],
    githubUrl: "https://github.com/ae6340915-lang/mena-air-quality-analysis",
    caseStudy: {
      overview: {
        en: "Particulate matter pollution (specifically fine particles less than 2.5 micrometers, PM2.5) poses severe environmental and public health hazards. This project investigates geographic distribution and historical trajectories of PM2.5 across Middle East and North Africa (MENA) nations.",
        ar: "يمثل تلوث الهواء بالجسيمات الدقيقة (أقل من 2.5 ميكرومتر، PM2.5) خطراً بيئياً وصحياً جسيماً. يبحث هذا المشروع في التوزيع الجغرافي والمسارات الزمنية التاريخية لتركيزات PM2.5 عبر دول منطقة الشرق الأوسط وشمال أفريقيا."
      },
      problemStatement: {
        en: "Raw environmental datasets are geographically fragmented and complex to digest. Decision-makers and researchers require unified visual analytics to identify geographic hotspots, desert dust influences, and anthropogenic emission trends.",
        ar: "تتسم البيانات البيئية الخام بالتشتت الجغرافي وصعوبة الاستيعاب المباشر. يحتاج الباحثون وصناع القرار إلى لوحات تحليلية موحدة لتحديد بؤر التلوث الجغرافية، وفصل تأثير العواصف الرملية الطبيعية عن الانبعاثات الصناعية."
      },
      objective: {
        en: "To aggregate multi-source environmental records, perform spatial-temporal harmonizations, design intuitive interactive dashboards in Tableau, and contrast country-level indicators against WHO guideline standards.",
        ar: "تجميع السجلات البيئية متعددة المصادر، ومواءمتها مكانياً وزمانياً، وتصميم لوحات تحكم تفاعلية متقدمة في Tableau، ومقارنة مؤشرات الدول بالمعايير العالمية لمنظمة الصحة العالمية."
      },
      dataset: {
        en: "Aggregated time-series observations of annual average PM2.5 concentrations, country boundaries, urbanization factors, and regional climate classifications across MENA countries.",
        ar: "بيانات سلاسل زمنية مجمعة للمتوسط السنوي لتركيزات PM2.5، وحدود الدول الجغرافية، ونسب التوسع الحضري، والتصنيفات المناخية الإقليمية."
      },
      eda: {
        en: "Identified marked seasonal peaks coinciding with regional sandstorm seasons, juxtaposed against persistent baseline urban emissions in high-density metropolitan zones.",
        ar: "رصد قمم موسمية حادة تتزامن مع مواسم العواصف الترابية الإقليمية، مقارنة بمستويات تلوث أساسية مستمرة في المناطق الحضرية ذات الكثافة السكانية العالية."
      },
      preprocessing: {
        en: "Cleaned temporal anomalies, synchronized geographic ISO codes for seamless GIS mapping, calculated multi-year moving averages, and normalized indices against international air quality guidelines.",
        ar: "معالجة الشواذ الزمنية، وتوحيد الأكواد الجغرافية الدولية لربط نظم المعلومات الجغرافية، وحساب المتوسطات المتحركة لعدة سنوات ومقارنتها بالحدود المسموح بها عالمياً."
      },
      methodology: {
        en: "Followed user-centered visual analytics principles: establishing macro geographic overview maps, progressive drill-downs into country profiles, and paired temporal trend lines.",
        ar: "اتباع منهجية التصور المتمحورة حول المستفيد: خريطة جغرافية شمولية تتيح الانتقال التدريجي إلى تفاصيل كل دولة، مع مخططات سلاسل زمنية متزامنة للمقارنة."
      },
      modelExperiments: {
        en: "Engineered comparative visual layouts in Tableau: choropleth density maps, synchronized year-over-year slope charts, and interactive filtering parameters for country benchmarking.",
        ar: "تصميم واجهات عرض مقارنة في Tableau: خرائط توزيع الكثافة الملونة، ومخططات انحدار المقارنة السنوية، ومعاملات التصفية التفاعلية للمقارنة المباشرة بين الدول."
      },
      evaluationMetrics: {
        en: "Exceedance frequency over WHO air quality thresholds, rate of annual change (slope percentage), and visual clarity / dashboard responsiveness.",
        ar: "معدل تجاوز معايير منظمة الصحة العالمية، والنسبة المئوية للتغير السنوي، وسهولة القراءة وسرعة استجابة لوحة التحكم التفاعلية."
      },
      results: {
        en: "Produced a comprehensive Tableau analytical dashboard exposing clear sub-regional disparities between arid desert environments and industrialized coastal regions.",
        ar: "بناء لوحة تحكم تحليلية متكاملة عبر Tableau تكشف بوضوح عن الفروق الإقليمية بين البيئات الصحراوية والمناطق الساحلية الصناعية."
      },
      challenges: {
        en: "Reconciling varying temporal measurement densities across countries and designing color palettes that remain legible while conveying severity without alarmism.",
        ar: "التوفيق بين تفاوت دقة وتكرار القياسات بين مختلف الدول، واختيار تدرجات لونية واضحة ودقيقة تنقل حجم التحدي البيئي بموضوعية علمية."
      },
      keyInsights: {
        en: "Visualizing spatial correlations demonstrated that regional air quality challenges transcend national boundaries, highlighting the imperative for cross-border environmental monitoring initiatives.",
        ar: "أثبت التصور المكاني أن تحديات جودة الهواء تتجاوز الحدود الجغرافية للدول، مما يبرز الأهمية القصوى للتعاون الإقليمي وتبادل البيانات البيئية."
      },
      lessonsLearned: {
        en: "Thoughtful visual design and intentional color palettes can transform dry multi-dimensional tables into immediate, impactful insights that drive informed dialogue.",
        ar: "التصميم البصري المدروس والتدرجات اللونية الهادفة قادرة على تحويل الجداول الرقمية المعقدة إلى رؤى فورية ذات أثر حقيقي يدعم الحوار واتخاذ القرار."
      }
    }
  }
];
