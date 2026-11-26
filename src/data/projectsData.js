export const projectsData = [
  {
    id: 'motor-fault-diagnosis',
    number: '01',
    visualType: 'motor',
    title: {
      en: 'Industrial Motor Fault Diagnosis',
      ar: 'تشخيص أعطال المحركات الصناعية'
    },
    category: {
      en: 'Machine Learning Classification',
      ar: 'تصنيف باستخدام التعلم الآلي'
    },
    description: {
      en: 'Sensor-based multi-class classification of industrial motor conditions using Python and Scikit-learn.',
      ar: 'تصنيف متعدد الفئات لحالات المحركات الصناعية بيانات الحساسات باستخدام Python وScikit-learn.'
    },
    datasetSummary: {
      en: '58,509 records • 48 features • 11 classes',
      ar: '58,509 سجل • 48 خاصية • 11 فئة'
    },
    datasetStats: [
      { labelEn: 'Records', labelAr: 'السجلات', value: '58,509' },
      { labelEn: 'Features', labelAr: 'الخصائص', value: '48' },
      { labelEn: 'Classes', labelAr: 'الفئات', value: '11' },
      { labelEn: 'Task', labelAr: 'المهمة', value: 'Classification' }
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/ae6340915-lang/industrial-motor-fault-diagnosis',
    caseStudy: {
      overview: { en: 'A multi-class classification workflow for diagnosing operating states from high-dimensional sensor readings.', ar: 'مسار تصنيف متعدد الفئات لتشخيص حالات التشغيل من قراءات حساسات عالية الأبعاد.' },
      problemStatement: { en: 'Motor failures require accurate discrimination between similar operating conditions.', ar: 'تتطلب أعطال المحركات تمييزاً دقيقاً بين حالات التشغيل المتشابهة.' },
      objective: { en: 'Prepare sensor features, train classifiers, and compare results across 11 classes.', ar: 'تجهيز خصائص الحساسات وتدريب المصنفات ومقارنة النتائج عبر 11 فئة.' },
      dataset: { en: '58,509 records with 48 continuous features and 11 operating condition labels.', ar: '58,509 سجل مع 48 خاصية مستمرة و11 تسمية لحالة التشغيل.' },
      eda: { en: 'Reviewed feature distributions, correlations, and class balance across sensor channels.', ar: 'تمت مراجعة توزيعات الخصائص والارتباطات وتوازن الفئات عبر قنوات الحساسات.' },
      preprocessing: { en: 'Checked missing values, standardized features, and used stratified train-test splitting.', ar: 'تم فحص القيم المفقودة وتوحيد الخصائص واستخدام تقسيم طبقي للتدريب والاختبار.' },
      methodology: { en: 'Moved from simple baselines to stronger classifiers with systematic comparison.', ar: 'تم الانتقال من نماذج مرجعية بسيطة إلى مصنفات أقوى مع مقارنة منهجية.' },
      modelExperiments: { en: 'Tested logistic regression, SVM, and ensemble-based classifiers.', ar: 'تم اختبار الانحدار اللوجستي وSVM ومصنفات قائمة على المجموعات.' },
      evaluationMetrics: { en: 'Accuracy, macro F1, precision, recall, and confusion matrix analysis.', ar: 'الدقة وF1 الكلي والدقة الإيجابية والاسترجاع وتحليل مصفوفة الالتباس.' },
      results: { en: 'Tree-based models captured complex sensor patterns most effectively in this workflow.', ar: 'التقطت النماذج القائمة على الأشجار أنماط الحساسات المعقدة بفعالية أكبر في هذا المسار.' },
      challenges: { en: 'Overlapping vibration signatures and high feature dimensionality.', ar: 'تداخل إشارات الاهتزاز وارتفاع أبعاد الخصائص.' },
      keyInsights: { en: 'Selecting informative sensor features improved both clarity and efficiency.', ar: 'اختيار خصائص الحساسات ذات المعلومات الأعلى حسّن الوضوح والكفاءة.' },
      lessonsLearned: { en: 'Error analysis should consider the operational cost of confusing fault types.', ar: 'يجب أن يراعي تحليل الأخطاء تكلفة الخلط بين أنواع الأعطال.' }
    }
  },
  {
    id: 'food-ordering-analysis',
    number: '02',
    visualType: 'food',
    title: {
      en: 'Online Food Ordering Analysis',
      ar: 'تحليل طلبات الطعام عبر الإنترنت'
    },
    category: {
      en: 'Data Analysis & Classification',
      ar: 'تحليل بيانات وتصنيف'
    },
    description: {
      en: 'Data cleaning, preprocessing, feature encoding, Logistic Regression, and model evaluation on food ordering data.',
      ar: 'تنظيف البيانات ومعالجتها وترميز الخصائص والانحدار اللوجستي وتقييم النموذج على بيانات طلبات الطعام.'
    },
    datasetSummary: {
      en: 'Customer behavior • feature encoding • binary classification',
      ar: 'سلوك العملاء • ترميز الخصائص • تصنيف ثنائي'
    },
    datasetStats: [
      { labelEn: 'Focus', labelAr: 'التركيز', value: 'Customer Patterns' },
      { labelEn: 'Model', labelAr: 'النموذج', value: 'Logistic Regression' },
      { labelEn: 'Task', labelAr: 'المهمة', value: 'Binary' }
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/ae6340915-lang/online-food-ordering-analysis',
    caseStudy: {
      overview: { en: 'An end-to-end analysis of customer survey data with an interpretable classification model.', ar: 'تحليل متكامل لبيانات استبيان العملاء مع نموذج تصنيف قابل للتفسير.' },
      problemStatement: { en: 'Food delivery platforms need to understand which factors relate to repeat ordering.', ar: 'تحتاج منصات توصيل الطعام إلى فهم العوامل المرتبطة بتكرار الطلب.' },
      objective: { en: 'Clean data, encode features, train Logistic Regression, and evaluate results.', ar: 'تنظيف البيانات وترميز الخصائص وتدريب الانحدار اللوجستي وتقييم النتائج.' },
      dataset: { en: 'Customer demographic, education, income, and feedback indicators.', ar: 'مؤشرات ديموغرافية وتعليمية ودخل وملاحظات للعملاء.' },
      eda: { en: 'Explored relationships between income, education, satisfaction, and ordering behavior.', ar: 'تم استكشاف العلاقات بين الدخل والتعليم والرضا وسلوك الطلب.' },
      preprocessing: { en: 'Handled missing values, encoded categorical fields, and scaled numerical features.', ar: 'تمت معالجة القيم المفقودة وترميز الحقول الفئوية وتوحيد الخصائص الرقمية.' },
      methodology: { en: 'Used Logistic Regression for transparent probabilistic interpretation.', ar: 'تم استخدام الانحدار اللوجستي لتفسير احتمالي شفاف.' },
      modelExperiments: { en: 'Compared encoded feature sets and regularization settings.', ar: 'تمت مقارنة مجموعات الخصائص المُرمزة وإعدادات الانتظام.' },
      evaluationMetrics: { en: 'Accuracy, precision, recall, F1, and ROC-AUC.', ar: 'الدقة والدقة الإيجابية والاسترجاع وF1 وROC-AUC.' },
      results: { en: 'Satisfaction and household indicators were strong predictors in this dataset.', ar: 'كانت مؤشرات الرضا وحجم الأسرة من أقوى المتنبئات في هذه البيانات.' },
      challenges: { en: 'Mixed categorical and ordinal variables required careful encoding.', ar: 'تطلبت المتغيرات الفئوية والرتبية المختلطة ترميزاً دقيقاً.' },
      keyInsights: { en: 'Interpretable coefficients made the model useful for business reasoning.', ar: 'جعلت المعاملات القابلة للتفسير النموذج مفيداً للاستنتاج التجاري.' },
      lessonsLearned: { en: 'Good encoding often matters as much as model choice.', ar: 'غالباً ما يكون الترميز الجيد بنفس أهمية اختيار النموذج.' }
    }
  },
  {
    id: 'dry-bean-classification',
    number: '03',
    visualType: 'bean',
    title: {
      en: 'Dry Bean Classification',
      ar: 'تصنيف الفاصوليا الجافة'
    },
    category: {
      en: 'Machine Learning Classification',
      ar: 'تصنيف باستخدام التعلم الآلي'
    },
    description: {
      en: 'Preprocessing, Label Encoding, feature scaling, and SVM classification for dry bean varieties.',
      ar: 'معالجة البيانات وترميز التسميات وتوحيد الخصائص وتصنيف SVM لأصناف الفاصوليا الجافة.'
    },
    datasetSummary: {
      en: '13,611 records • 16 features • 7 varieties',
      ar: '13,611 سجل • 16 خاصية • 7 أصناف'
    },
    datasetStats: [
      { labelEn: 'Records', labelAr: 'السجلات', value: '13,611' },
      { labelEn: 'Features', labelAr: 'الخصائص', value: '16' },
      { labelEn: 'Classes', labelAr: 'الأصناف', value: '7' },
      { labelEn: 'Model', labelAr: 'النموذج', value: 'SVM' }
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/ae6340915-lang/dry-bean-classification',
    caseStudy: {
      overview: { en: 'A geometry-based classification workflow for seven dry bean varieties.', ar: 'مسار تصنيف قائم على الخصائص الهندسية لسبعة أصناف من الفاصوليا الجافة.' },
      problemStatement: { en: 'Several bean varieties look visually similar and need objective automated separation.', ar: 'تبدو عدة أصناف متشابهة بصرياً وتحتاج فصلاً آلياً موضوعياً.' },
      objective: { en: 'Preprocess features, scale them, and apply SVM classification.', ar: 'معالجة الخصائص وتوحيد مقاييسها وتطبيق تصنيف SVM.' },
      dataset: { en: '13,611 samples with 16 geometric and shape features.', ar: '13,611 عينة مع 16 خاصية هندسية وشكلية.' },
      eda: { en: 'Compared feature distributions and overlap between varieties.', ar: 'تمت مقارنة توزيعات الخصائص والتداخل بين الأصناف.' },
      preprocessing: { en: 'Label Encoding, feature scaling, and stratified splitting.', ar: 'ترميز التسميات وتوحيد الخصائص وتقسيم طبقي.' },
      methodology: { en: 'SVM used to construct non-linear decision boundaries between shape classes.', ar: 'تم استخدام SVM لبناء حدود قرار غير خطية بين فئات الأشكال.' },
      modelExperiments: { en: 'Tested different kernels and regularization values.', ar: 'تم اختبار نوى ومعاملات انتظام مختلفة.' },
      evaluationMetrics: { en: 'Accuracy, macro F1, precision, recall, and confusion matrix.', ar: 'الدقة وF1 الكلي والدقة الإيجابية والاسترجاع ومصفوفة الالتباس.' },
      results: { en: 'Scaled SVM features produced reliable separation across most varieties.', ar: 'أنتجت الخصائص المُوحّدة لـ SVM فصلاً موثوقاً في معظم الأصناف.' },
      challenges: { en: 'Morphological overlap between closely related bean classes.', ar: 'التداخل المورفولوجي بين الأصناف المتقاربة.' },
      keyInsights: { en: 'Shape ratios were more informative than raw dimensions.', ar: 'كانت نسب الأشكال أكثر فائدة من الأبعاد الخام.' },
      lessonsLearned: { en: 'Scaling is essential for distance-based classifiers.', ar: 'توحيد المقاييس ضروري للمصنفات المعتمدة على المسافة.' }
    }
  },
  {
    id: 'wildfire-risk-analysis',
    number: '04',
    visualType: 'wildfire',
    title: {
      en: 'Wildfire Risk Analysis',
      ar: 'تحليل مخاطر حرائق الغابات'
    },
    category: {
      en: 'Data Analysis & Visualization',
      ar: 'تحليل بيانات وتصور'
    },
    description: {
      en: 'Large-scale exploration, target analysis, preprocessing, and visualization of wildfire risk factors.',
      ar: 'استكشاف واسع النطاق وتحليل المتغير المستهدف ومعالجة وتصور عوامل مخاطر حرائق الغابات.'
    },
    datasetSummary: {
      en: 'Large-scale exploration • target analysis • visualization',
      ar: 'استكشاف واسع النطاق • تحليل الهدف • تصور'
    },
    datasetStats: [
      { labelEn: 'Scope', labelAr: 'النطاق', value: 'Large-scale' },
      { labelEn: 'Focus', labelAr: 'التركيز', value: 'Risk Factors' },
      { labelEn: 'Output', labelAr: 'الناتج', value: 'Analytical Insights' }
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/ae6340915-lang',
    caseStudy: {
      overview: { en: 'Exploratory analysis of a large wildfire-related dataset to understand risk patterns.', ar: 'تحليل استكشافي لمجموعة بيانات كبيرة مرتبطة بحرائق الغابات لفهم أنماط المخاطر.' },
      problemStatement: { en: 'Wildfire risk is driven by interacting environmental and temporal variables.', ar: 'تتأثر مخاطر الحرائق بتفاعل متغيرات بيئية وزمنية.' },
      objective: { en: 'Explore distributions, analyze the target, clean data, and visualize key relationships.', ar: 'استكشاف التوزيعات وتحليل الهدف وتنظيف البيانات وتصور العلاقات الرئيسية.' },
      dataset: { en: 'A large tabular dataset covering environmental and wildfire-related indicators.', ar: 'مجموعة بيانات جدولية كبيرة تغطي مؤشرات بيئية ومؤشرات مرتبطة بالحرائق.' },
      eda: { en: 'Investigated distributions, correlations, and target behavior across features.', ar: 'تم فحص التوزيعات والارتباطات وسلوك المتغير المستهدف عبر الخصائص.' },
      preprocessing: { en: 'Cleaned inconsistent values and prepared variables for analysis.', ar: 'تم تنظيف القيم غير المتسقة وتجهيز المتغيرات للتحليل.' },
      methodology: { en: 'Structured exploratory workflow from overview to targeted investigation.', ar: 'مسار استكشافي منظم من النظرة العامة إلى التحليل الموجّه.' },
      modelExperiments: { en: 'No predictive model was the focus; analytical comparisons were emphasized.', ar: 'لم يكن التركيز على نموذج تنبؤي، بل على المقارنات التحليلية.' },
      evaluationMetrics: { en: 'Distribution checks, correlation review, and visual validation.', ar: 'فحص التوزيعات ومراجعة الارتباطات والتحقق البصري.' },
      results: { en: 'Several environmental indicators showed strong association with the risk target.', ar: 'أظهرت عدة مؤشرات بيئية ارتباطاً قوياً بمؤشر الخطر.' },
      challenges: { en: 'Large data volume and skewed distributions required careful sampling.', ar: 'تطلب حجم البيانات الكبير والتوزيعات المنحرفة أخذ عينات دقيقاً.' },
      keyInsights: { en: 'Visual summaries revealed patterns not obvious in raw tables.', ar: 'كشفت الملخصات المرئية أنماطاً غير واضحة في الجداول الخام.' },
      lessonsLearned: { en: 'Good EDA turns a large dataset into a focused analytical story.', ar: 'يحوّل التحليل الاستكشافي الجيد البيانات الكبيرة إلى قصة تحليلية مركزة.' }
    }
  },
  {
    id: 'olympic-big-data-analysis',
    number: '05',
    visualType: 'olympic',
    title: {
      en: 'Olympics Big Data Analysis',
      ar: 'تحليل بيانات الأولمبياد الضخمة'
    },
    category: {
      en: 'Big Data Analytics',
      ar: 'تحليل البيانات الضخمة'
    },
    description: {
      en: 'Hadoop, HDFS, and Apache Spark / PySpark used to explore and process Olympic big data.',
      ar: 'استخدام Hadoop وHDFS وApache Spark وPySpark لاستكشاف ومعالجة بيانات الأولمبياد الضخمة.'
    },
    datasetSummary: {
      en: 'Hadoop • HDFS • Apache Spark • PySpark',
      ar: 'Hadoop • HDFS • Apache Spark • PySpark'
    },
    datasetStats: [
      { labelEn: 'Ecosystem', labelAr: 'المنظومة', value: 'Hadoop / Spark' },
      { labelEn: 'Language', labelAr: 'اللغة', value: 'PySpark' },
      { labelEn: 'Task', labelAr: 'المهمة', value: 'Distributed Analysis' }
    ],
    technologies: ['Hadoop', 'HDFS', 'Apache Spark', 'PySpark'],
    githubUrl: 'https://github.com/ae6340915-lang',
    caseStudy: {
      overview: { en: 'A distributed data analysis project using the Hadoop and Spark ecosystems.', ar: 'مشروع تحليل بيانات موزع باستخدام منظومتي Hadoop وSpark.' },
      problemStatement: { en: 'Large historical Olympic datasets require distributed storage and processing.', ar: 'تتطلب مجموعات البيانات الأولمبية التاريخية الكبيرة تخزيناً ومعالجة موزعة.' },
      objective: { en: 'Store data in HDFS and run analytical transformations with PySpark.', ar: 'تخزين البيانات في HDFS وتشغيل تحويلات تحليلية باستخدام PySpark.' },
      dataset: { en: 'Olympic historical records processed in a distributed environment.', ar: 'سجلات أولمبية تاريخية تمت معالجتها في بيئة موزعة.' },
      eda: { en: 'Inspected schema, distributions, and key categorical dimensions.', ar: 'تم فحص المخطط والتوزيعات والأبعاد الفئوية الرئيسية.' },
      preprocessing: { en: 'Cleaned records and prepared DataFrames for Spark transformations.', ar: 'تم تنظيف السجلات وتجهيز DataFrames لتحويلات Spark.' },
      methodology: { en: 'HDFS storage followed by Spark SQL and DataFrame analysis.', ar: 'تخزين HDFS يليه تحليل Spark SQL وDataFrames.' },
      modelExperiments: { en: 'Focus on distributed aggregation rather than predictive modeling.', ar: 'التركيز على التجميع الموزع بدلاً من النمذجة التنبؤية.' },
      evaluationMetrics: { en: 'Query correctness, aggregation consistency, and runtime behavior.', ar: 'صحة الاستعلامات واتساق التجميعات وسلوك زمن التنفيذ.' },
      results: { en: 'Distributed processing enabled efficient exploration of large Olympic records.', ar: 'أتاحت المعالجة الموزعة استكشافاً فعّالاً للسجلات الأولمبية الكبيرة.' },
      challenges: { en: 'Schema handling and distributed job setup.', ar: 'التعامل مع المخطط وإعداد المهام الموزعة.' },
      keyInsights: { en: 'Spark simplified large-scale transformations with familiar Python syntax.', ar: 'سهّل Spark تحويلات البيانات الكبيرة بصيغة Python مألوفة.' },
      lessonsLearned: { en: 'Understanding partitions matters as much as writing the query.', ar: 'فهم الأقسام لا يقل أهمية عن كتابة الاستعلام.' }
    }
  },
  {
    id: 'sales-pyspark-processing',
    number: '06',
    visualType: 'sales',
    title: {
      en: 'Sales Data Processing with PySpark',
      ar: 'معالجة بيانات المبيعات باستخدام PySpark'
    },
    category: {
      en: 'Data Processing & Big Data',
      ar: 'معالجة بيانات وبيانات ضخمة'
    },
    description: {
      en: 'Data ingestion, transformation, aggregation, and distributed processing with PySpark and Apache Spark.',
      ar: 'استيراد البيانات وتحويلها وتجميعها ومعالجتها موزعة باستخدام PySpark وApache Spark.'
    },
    datasetSummary: {
      en: 'Ingestion • transformation • aggregation • Spark',
      ar: 'استيراد • تحويل • تجميع • Spark'
    },
    datasetStats: [
      { labelEn: 'Engine', labelAr: 'المحرك', value: 'Apache Spark' },
      { labelEn: 'API', labelAr: 'الواجهة', value: 'PySpark' },
      { labelEn: 'Output', labelAr: 'الناتج', value: 'Aggregated Data' }
    ],
    technologies: ['PySpark', 'Apache Spark', 'Python'],
    githubUrl: 'https://github.com/ae6340915-lang',
    caseStudy: {
      overview: { en: 'A sales data processing workflow built with distributed Spark operations.', ar: 'مسار معالجة بيانات مبيعات مبني بعمليات Spark الموزعة.' },
      problemStatement: { en: 'Sales records need repeatable transformation and aggregation at scale.', ar: 'تحتاج سجلات المبيعات إلى تحويل وتجميع قابل للتكرار على نطاق واسع.' },
      objective: { en: 'Ingest raw data, clean it, transform fields, and aggregate key metrics.', ar: 'استيراد البيانات الخام وتنظيفها وتحويل الحقول وتجميع المقاييس الرئيسية.' },
      dataset: { en: 'Structured sales transactions with product, quantity, and revenue fields.', ar: 'معاملات مبيعات منظمة مع حقول المنتج والكمية والإيراد.' },
      eda: { en: 'Reviewed schema and basic distributions before transformations.', ar: 'تمت مراجعة المخطط والتوزيعات الأساسية قبل التحويلات.' },
      preprocessing: { en: 'Handled nulls, cast types, and normalized column names.', ar: 'تمت معالجة القيم الفارغة وتحويل الأنواع وتوحيد أسماء الأعمدة.' },
      methodology: { en: 'Spark DataFrame pipeline with staged transformations and aggregations.', ar: 'مسار Spark DataFrame بتحويلات وتجميعات مرحلية.' },
      modelExperiments: { en: 'No ML model; processing logic and aggregate outputs were the deliverable.', ar: 'لا يوجد نموذج تعلم آلي؛ كان منطق المعالجة ومخرجات التجميع هي النتيجة.' },
      evaluationMetrics: { en: 'Row counts, aggregate validation, and output consistency.', ar: 'عدد الصفوف والتحقق من التجميعات واتساق المخرجات.' },
      results: { en: 'Produced clean aggregated sales tables ready for analysis.', ar: 'تم إنتاج جداول مبيعات مجمعة ونظيفة جاهزة للتحليل.' },
      challenges: { en: 'Type casting and distributed aggregation correctness.', ar: 'تحويل الأنواع وصحة التجميع الموزع.' },
      keyInsights: { en: 'A clear transformation sequence reduces debugging in Spark jobs.', ar: 'تسلسل التحويل الواضح يقلل أخطاء تصحيح مهام Spark.' },
      lessonsLearned: { en: 'Validating intermediate DataFrames saves time at the end.', ar: 'التحقق من DataFrames الوسيطة يوفر الوقت في النهاية.' }
    }
  },
  {
    id: 'ecommerce-data-platform',
    number: '07',
    visualType: 'ecommerce',
    title: {
      en: 'E-Commerce Data Platform',
      ar: 'منصة بيانات التجارة الإلكترونية'
    },
    category: {
      en: 'Data Analysis & Database Systems',
      ar: 'تحليل بيانات وأنظمة قواعد البيانات'
    },
    description: {
      en: 'Database design, SQL, data processing, MongoDB, and a Streamlit dashboard for e-commerce data.',
      ar: 'تصميم قاعدة البيانات وSQL ومعالجة البيانات وMongoDB ولوحة Streamlit لبيانات التجارة الإلكترونية.'
    },
    datasetSummary: {
      en: 'Python • SQL • MongoDB • Streamlit • Pandas',
      ar: 'Python • SQL • MongoDB • Streamlit • Pandas'
    },
    datasetStats: [
      { labelEn: 'Database', labelAr: 'قاعدة البيانات', value: 'SQL / MongoDB' },
      { labelEn: 'Dashboard', labelAr: 'لوحة التحكم', value: 'Streamlit' },
      { labelEn: 'Focus', labelAr: 'التركيز', value: 'Data Organization' }
    ],
    technologies: ['Python', 'SQL', 'MongoDB', 'Streamlit', 'Pandas'],
    githubUrl: 'https://github.com/ae6340915-lang',
    caseStudy: {
      overview: { en: 'An integrated e-commerce analytics project combining databases, processing, and a dashboard.', ar: 'مشروع تحليل تجارة إلكترونية متكامل يجمع قواعد البيانات والمعالجة ولوحة التحكم.' },
      problemStatement: { en: 'E-commerce data must be organized before meaningful analysis is possible.', ar: 'يجب تنظيم بيانات التجارة الإلكترونية قبل إمكانية التحليل الهادف.' },
      objective: { en: 'Design a database, process data, query it, and present insights in a dashboard.', ar: 'تصميم قاعدة بيانات ومعالجة البيانات والاستعلام عنها وعرض الرؤى في لوحة تحكم.' },
      dataset: { en: 'Structured e-commerce records covering customers, orders, and products.', ar: 'سجلات تجارة إلكترونية منظمة تغطي العملاء والطلبات والمنتجات.' },
      eda: { en: 'Explored relationships between orders, customers, and product attributes.', ar: 'تم استكشاف العلاقات بين الطلبات والعملاء وخصائص المنتجات.' },
      preprocessing: { en: 'Cleaned records and organized them into relational and document collections.', ar: 'تم تنظيف السجلات وتنظيمها في جداول علائقية ومجموعات مستندات.' },
      methodology: { en: 'Database design, SQL querying, Python processing, and Streamlit presentation.', ar: 'تصميم قاعدة البيانات واستعلامات SQL ومعالجة Python وعرض Streamlit.' },
      modelExperiments: { en: 'No predictive model; the focus was on data organization and reporting.', ar: 'لا يوجد نموذج تنبؤي؛ كان التركيز على تنظيم البيانات والتقارير.' },
      evaluationMetrics: { en: 'Query results, data consistency, and dashboard readability.', ar: 'نتائج الاستعلامات واتساق البيانات ووضوح لوحة التحكم.' },
      results: { en: 'A working analytical dashboard backed by organized data stores.', ar: 'لوحة تحكم تحليلية عاملة مدعومة بمخازن بيانات منظمة.' },
      challenges: { en: 'Linking database design with analysis outputs.', ar: 'ربط تصميم قاعدة البيانات بمخرجات التحليل.' },
      keyInsights: { en: 'Good schema design makes downstream analysis much simpler.', ar: 'يجعل التصميم الجيد للمخطط تحليل البيانات اللاحق أكثر بساطة.' },
      lessonsLearned: { en: 'Dashboards are most useful when the data model is clear first.', ar: 'تكون لوحات التحكم أكثر فائدة عندما يكون نموذج البيانات واضحاً أولاً.' }
    }
  },
  {
    id: 'machine-learning-classification',
    number: '08',
    visualType: 'logistic',
    title: {
      en: 'Machine Learning Classification Projects',
      ar: 'مشاريع تصنيف التعلم الآلي'
    },
    category: {
      en: 'Machine Learning Classification',
      ar: 'تصنيف باستخدام التعلم الآلي'
    },
    description: {
      en: 'A focused group of classification workflows using Logistic Regression, SVM, KNN, and Decision Trees.',
      ar: 'مجموعة مركزة من مسارات التصنيف باستخدام الانحدار اللوجستي وSVM وKNN وأشجار القرار.'
    },
    datasetSummary: {
      en: 'Preprocessing • encoding • scaling • stratified split • metrics',
      ar: 'معالجة • ترميز • توحيد • تقسيم طبقي • مقاييس'
    },
    datasetStats: [
      { labelEn: 'Models', labelAr: 'النماذج', value: 'LR / SVM / KNN / Trees' },
      { labelEn: 'Focus', labelAr: 'التركيز', value: 'Classification' },
      { labelEn: 'Evaluation', labelAr: 'التقييم', value: 'Comparative Metrics' }
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/ae6340915-lang',
    caseStudy: {
      overview: { en: 'A collection of classification experiments built around careful preprocessing and model comparison.', ar: 'مجموعة من تجارب التصنيف المبنية على معالجة دقيقة ومقارنة النماذج.' },
      problemStatement: { en: 'Classification tasks need a transparent baseline before trying more complex models.', ar: 'تحتاج مهام التصنيف إلى خط أساس شفاف قبل تجربة نماذج أكثر تعقيداً.' },
      objective: { en: 'Clean and encode data, scale features, train classifiers, and evaluate them consistently.', ar: 'تنظيف البيانات وترميزها وتوحيد الخصائص وتدريب المصنفات وتقييمها بثبات.' },
      dataset: { en: 'Structured tabular datasets with categorical and numerical predictors.', ar: 'مجموعات بيانات جدولية منظمة مع متنبئات فئوية ورقمية.' },
      eda: { en: 'Checked class balance, feature ranges, and basic relationships before modeling.', ar: 'تم فحص توازن الفئات ونطاقات الخصائص والعلاقات الأساسية قبل النمذجة.' },
      preprocessing: { en: 'Missing-value checks, encoding, feature standardization, and stratified splitting.', ar: 'فحص القيم المفقودة والترميز وتوحيد الخصائص والتقسيم الطبقي.' },
      methodology: { en: 'Compared linear, distance-based, kernel-based, and tree-based decision boundaries.', ar: 'تمت مقارنة حدود القرار الخطية والمعتمدة على المسافة والنواة والأشجار.' },
      modelExperiments: { en: 'Tested Logistic Regression, SVM kernels, KNN, and Decision Trees.', ar: 'تم اختبار الانحدار اللوجستي ونوى SVM وKNN وأشجار القرار.' },
      evaluationMetrics: { en: 'Accuracy, precision, recall, F1, confusion matrix, and ROC-AUC where applicable.', ar: 'الدقة والدقة الإيجابية والاسترجاع وF1 ومصفوفة الالتباس وROC-AUC عند الإمكان.' },
      results: { en: 'Built a clear reference point for choosing a classifier based on data structure and interpretability needs.', ar: 'تم بناء مرجع واضح لاختيار المصنف بناءً على بنية البيانات والحاجة إلى التفسير.' },
      challenges: { en: 'Feature scaling, categorical encoding, and class imbalance.', ar: 'توحيد الخصائص وترميز الفئات وتفاوت الفئات.' },
      keyInsights: { en: 'A well-built baseline is a strong reference for later models.', ar: 'خط الأساس المبني جيداً مرجع قوي للنماذج اللاحقة.' },
      lessonsLearned: { en: 'Parameter tuning should always be guided by validation results.', ar: 'يجب أن يستند ضبط المعاملات دائماً إلى نتائج التحقق.' }
    }
  }
];
