    // --- Data Definitions ---
    const getRandomPrice = () => Math.floor(Math.random() * (200 - 100 + 1)) + 100;

    // Updated data structure to include grades within stages
    const educationalStagesData = {
      'المرحلة التمهيدية': ['KG1 & KG2'],
      'المرحلة الابتدائية': [
        'الصف الأول الابتدائي', 'الصف الثاني الابتدائي', 'الصف الثالث الابتدائي',
        'الصف الرابع الابتدائي', 'الصف الخامس الابتدائي', 'الصف السادس الابتدائي'
      ],
      'المرحلة الإعدادية': [
        'الصف الأول الإعدادي', 'الصف الثاني الإعدادي', 'الصف الثالث الإعدادي'
      ],
      'المرحلة الثانوية': [
        'الصف الأول الثانوي', 'الصف الثاني الثانوي',
        'الصف الثالث الثانوي العلمي - رياضة', 'الصف الثالث الثانوي العلمي - علوم',
        'الصف الثالث الثانوي الأدبي'
      ]
    };

    const teachersData = {
      // Kindergarten
      'KG1 & KG2_الرياضيات': ['أ. منى السيد', 'أ. أحمد كمال', 'أ. سارة فؤاد', 'أ. خالد محمود', 'أ. نورا جمال'],
      'KG1 & KG2_اللغة الإنجليزية': ['Ms. Emily Brown', 'Mr. David Lee', 'Ms. Sarah Green', 'Mr. John White', 'Ms. Olivia Wilson'],
      'KG1 & KG2_اللغة العربية': ['أ. فاطمة الزهراء', 'أ. عبد الرحمن', 'أ. مريم السعدي', 'أ. يوسف الشامي', 'أ. نور الهدى'],
      'KG1 & KG2_التربية الفنية': ['أ. هدى الفناني', 'أ. رسام البصري', 'أ. إيمان الرسامة', 'أ. كريم الخطاط', 'أ. داليا النحاتة'],
      'KG1 & KG2_الرياضيات المتقدمة': ['أ. عبير حساب', 'أ. مازن الذكي', 'أ. سلمى الأرقام', 'أ. فراس الرياضي', 'أ. جيهان الحلول'],
      'KG1 & KG2_التربية الدينية': ['أ. إيمان الهدى', 'أ. نور الدين', 'أ. يوسف الإيماني'],


      // Primary Grades (Example for all grades, you can customize per grade)
      'الصف الأول الابتدائي_العلوم': ['أ. محمود العلوم', 'أ. نيرمين الكيميائي', 'أ. عماد الأحياء'],
      'الصف الأول الابتدائي_الرياضيات': ['أ. عادل الجبر', 'أ. سمر الهندسة', 'أ. رامي الحسابي'],
      'الصف الأول الابتدائي_الدراسات الاجتماعية': ['أ. هناء التاريخ', 'أ. وليد الجغرافيا', 'أ. منى المواطنة'],
      'الصف الأول الابتدائي_التكنولوجيا': ['أ. أحمد الحاسوب', 'أ. داليا البرمجة'],
      'الصف الأول الابتدائي_اللغة العربية': ['أ. محمود الأديب', 'أ. سارة النحوي'],
      'الصف الأول الابتدائي_اللغة الإنجليزية': ['Mr. Ben Carter', 'Ms. Chloe Adams'],
      'الصف الأول الابتدائي_اللغة الفرنسية': ['Mme. Sophie Dubois', 'M. Antoine Petit'],
      'الصف الأول الابتدائي_اللغة الألمانية': ['Herr. Müller', 'Frau. Schmidt'],
      'الصف الأول الابتدائي_اللغة الإيطالية': ['Sig.ra Rossi', 'Sig. Bianchi'],
      'الصف الأول الابتدائي_التربية الدينية': ['أ. خالد الزاهد', 'أ. عائشة العابد'],

      // For simplicity, using same subjects/teachers for all primary grades.
      // In a real app, you'd define them for each grade.
      'الصف الثاني الابتدائي_العلوم': ['أ. محمود العلوم', 'أ. نيرمين الكيميائي', 'أ. عماد الأحياء'],
      'الصف الثاني الابتدائي_الرياضيات': ['أ. عادل الجبر', 'أ. سمر الهندسة', 'أ. رامي الحسابي'],
      'الصف الثاني الابتدائي_الدراسات الاجتماعية': ['أ. هناء التاريخ', 'أ. وليد الجغرافيا', 'أ. منى المواطنة'],
      'الصف الثاني الابتدائي_التكنولوجيا': ['أ. أحمد الحاسوب', 'أ. داليا البرمجة'],
      'الصف الثاني الابتدائي_اللغة العربية': ['أ. محمود الأديب', 'أ. سارة النحوي'],
      'الصف الثاني الابتدائي_اللغة الإنجليزية': ['Mr. Ben Carter', 'Ms. Chloe Adams'],
      'الصف الثاني الابتدائي_التربية الدينية': ['أ. خالد الزاهد', 'أ. عائشة العابد'],

      'الصف الثالث الابتدائي_العلوم': ['أ. محمود العلوم', 'أ. نيرمين الكيميائي', 'أ. عماد الأحياء'],
      'الصف الثالث الابتدائي_الرياضيات': ['أ. عادل الجبر', 'أ. سمر الهندسة', 'أ. رامي الحسابي'],
      'الصف الثالث الابتدائي_الدراسات الاجتماعية': ['أ. هناء التاريخ', 'أ. وليد الجغرافيا', 'أ. منى المواطنة'],
      'الصف الثالث الابتدائي_التكنولوجيا': ['أ. أحمد الحاسوب', 'أ. داليا البرمجة'],
      'الصف الثالث الابتدائي_اللغة العربية': ['أ. محمود الأديب', 'أ. سارة النحوي'],
      'الصف الثالث الابتدائي_اللغة الإنجليزية': ['Mr. Ben Carter', 'Ms. Chloe Adams'],
      'الصف الثالث الابتدائي_التربية الدينية': ['أ. خالد الزاهد', 'أ. عائشة العابد'],

      'الصف الرابع الابتدائي_العلوم': ['أ. محمود العلوم', 'أ. نيرمين الكيميائي', 'أ. عماد الأحياء'],
      'الصف الرابع الابتدائي_الرياضيات': ['أ. عادل الجبر', 'أ. سمر الهندسة', 'أ. رامي الحسابي'],
      'الصف الرابع الابتدائي_الدراسات الاجتماعية': ['أ. هناء التاريخ', 'أ. وليد الجغرافيا', 'أ. منى المواطنة'],
      'الصف الرابع الابتدائي_التكنولوجيا': ['أ. أحمد الحاسوب', 'أ. داليا البرمجة'],
      'الصف الرابع الابتدائي_اللغة العربية': ['أ. محمود الأديب', 'أ. سارة النحوي'],
      'الصف الرابع الابتدائي_اللغة الإنجليزية': ['Mr. Ben Carter', 'Ms. Chloe Adams'],
      'الصف الرابع الابتدائي_التربية الدينية': ['أ. خالد الزاهد', 'أ. عائشة العابد'],

      'الصف الخامس الابتدائي_العلوم': ['أ. محمود العلوم', 'أ. نيرمين الكيميائي', 'أ. عماد الأحياء'],
      'الصف الخامس الابتدائي_الرياضيات': ['أ. عادل الجبر', 'أ. سمر الهندسة', 'أ. رامي الحسابي'],
      'الصف الخامس الابتدائي_الدراسات الاجتماعية': ['أ. هناء التاريخ', 'أ. وليد الجغرافيا', 'أ. منى المواطنة'],
      'الصف الخامس الابتدائي_التكنولوجيا': ['أ. أحمد الحاسوب', 'أ. داليا البرمجة'],
      'الصف الخامس الابتدائي_اللغة العربية': ['أ. محمود الأديب', 'أ. سارة النحوي'],
      'الصف الخامس الابتدائي_اللغة الإنجليزية': ['Mr. Ben Carter', 'Ms. Chloe Adams'],
      'الصف الخامس الابتدائي_التربية الدينية': ['أ. خالد الزاهد', 'أ. عائشة العابد'],

      'الصف السادس الابتدائي_العلوم': ['أ. محمود العلوم', 'أ. نيرمين الكيميائي', 'أ. عماد الأحياء'],
      'الصف السادس الابتدائي_الرياضيات': ['أ. عادل الجبر', 'أ. سمر الهندسة', 'أ. رامي الحسابي'],
      'الصف السادس الابتدائي_الدراسات الاجتماعية': ['أ. هناء التاريخ', 'أ. وليد الجغرافيا', 'أ. منى المواطنة'],
      'الصف السادس الابتدائي_التكنولوجيا': ['أ. أحمد الحاسوب', 'أ. داليا البرمجة'],
      'الصف السادس الابتدائي_اللغة العربية': ['أ. محمود الأديب', 'أ. سارة النحوي'],
      'الصف السادس الابتدائي_اللغة الإنجليزية': ['Mr. Ben Carter', 'Ms. Chloe Adams'],
      'الصف السادس الابتدائي_التربية الدينية': ['أ. خالد الزاهد', 'أ. عائشة العابد'],


      // Preparatory Grades
      'الصف الأول الإعدادي_العلوم': ['أ. كمال الكيميائي', 'أ. سمر الفيزيائي', 'أ. علي الأحياء'],
      'الصف الأول الإعدادي_الرياضيات': ['أ. حسام الدين', 'أ. مروة الجبر', 'أ. خالد الهندسة'],
      'الصف الأول الإعدادي_الدراسات الاجتماعية': ['أ. أحمد الحضارات', 'أ. منى الجغرافيا السياسية'],
      'الصف الأول الإعدادي_التكنولوجيا': ['أ. رامي الحاسوب', 'أ. داليا البرمجة'],
      'الصف الأول الإعدادي_اللغة العربية': ['أ. محمود النحوي', 'أ. سارة البلاغية'],
      'الصف الأول الإعدادي_اللغة الإنجليزية': ['Ms. Sarah Parker', 'Mr. Alex Turner'],
      'الصف الأول الإعدادي_اللغة الفرنسية': ['Mme. Isabelle', 'M. Laurent'],
      'الصف الأول الإعدادي_اللغة الألمانية': ['Herr. Schneider', 'Frau. Weber'],
      'الصف الأول الإعدادي_اللغة الإيطالية': ['Sig.ra Moretti', 'Sig. Conti'],
      'الصف الأول الإعدادي_التربية الدينية': ['أ. سامي الإمامي', 'أ. رحاب الأحمدي'],

      'الصف الثاني الإعدادي_العلوم': ['أ. كمال الكيميائي', 'أ. سمر الفيزيائي', 'أ. علي الأحياء'],
      'الصف الثاني الإعدادي_الرياضيات': ['أ. حسام الدين', 'أ. مروة الجبر', 'أ. خالد الهندسة'],
      'الصف الثاني الإعدادي_الدراسات الاجتماعية': ['أ. أحمد الحضارات', 'أ. منى الجغرافيا السياسية'],
      'الصف الثاني الإعدادي_التكنولوجيا': ['أ. رامي الحاسوب', 'أ. داليا البرمجة'],
      'الصف الثاني الإعدادي_اللغة العربية': ['أ. محمود النحوي', 'أ. سارة البلاغية'],
      'الصف الثاني الإعدادي_اللغة الإنجليزية': ['Ms. Sarah Parker', 'Mr. Alex Turner'],
      'الصف الثاني الإعدادي_التربية الدينية': ['أ. سامي الإمامي', 'أ. رحاب الأحمدي'],

      'الصف الثالث الإعدادي_العلوم': ['أ. كمال الكيميائي', 'أ. سمر الفيزيائي', 'أ. علي الأحياء'],
      'الصف الثالث الإعدادي_الرياضيات': ['أ. حسام الدين', 'أ. مروة الجبر', 'أ. خالد الهندسة'],
      'الصف الثالث الإعدادي_الدراسات الاجتماعية': ['أ. أحمد الحضارات', 'أ. منى الجغرافيا السياسية'],
      'الصف الثالث الإعدادي_التكنولوجيا': ['أ. رامي الحاسوب', 'أ. داليا البرمجة'],
      'الصف الثالث الإعدادي_اللغة العربية': ['أ. محمود النحوي', 'أ. سارة البلاغية'],
      'الصف الثالث الإعدادي_اللغة الإنجليزية': ['Ms. Sarah Parker', 'Mr. Alex Turner'],
      'الصف الثالث الإعدادي_التربية الدينية': ['أ. سامي الإمامي', 'أ. رحاب الأحمدي'],

      // Secondary Grades
      'الصف الأول الثانوي_اللغة العربية': ['أ. د. إبراهيم الأديب', 'أ. د. نسرين النحوي'],
      'الصف الأول الثانوي_اللغة الإنجليزية': ['Prof. Emma Watson', 'Dr. Michael Johnson'],
      'الصف الأول الثانوي_التربية الدينية': ['أ. د. علي الشافعي', 'أ. د. فاطمة الزهراء'],
      'الصف الأول الثانوي_التربية الوطنية': ['أ. عمر الوطني', 'أ. ليلي المواطنة'],
      'الصف الأول الثانوي_الفيزياء': ['أ. د. محمد النور', 'أ. د. سارة الطاقة'],
      'الصف الأول الثانوي_الكيمياء': ['أ. د. إبراهيم الجزيئات', 'أ. د. نسرين التفاعلات'],
      'الصف الأول الثانوي_الأحياء': ['أ. د. أحمد الكائن', 'أ. د. نور الحياة'],
      'الصف الأول الثانوي_الرياضيات': ['أ. د. كريم الجبر', 'أ. د. هدى الهندسة'],
      'الصف الأول الثانوي_التاريخ': ['أ. د. حسام المؤرخ', 'أ. د. مروة الحضارات'],
      'الصف الأول الثانوي_الجغرافيا': ['أ. د. عادل الجغرافي', 'أ. د. داليا الطبيعية'],
      'الصف الأول الثانوي_الفلسفة': ['أ. د. وائل الفيلسوف', 'أ. د. نهى المنطق'],
      'الصف الأول الثانوي_علم النفس': ['أ. د. أحمد النفس', 'أ. د. منى السلوك'],

      'الصف الثاني الثانوي_اللغة العربية': ['أ. د. إبراهيم الأديب', 'أ. د. نسرين النحوي'],
      'الصف الثاني الثانوي_اللغة الإنجليزية': ['Prof. Emma Watson', 'Dr. Michael Johnson'],
      'الصف الثاني الثانوي_التربية الدينية': ['أ. د. علي الشافعي', 'أ. د. فاطمة الزهراء'],
      'الصف الثاني الثانوي_التربية الوطنية': ['أ. عمر الوطني', 'أ. ليلي المواطنة'],
      'الصف الثاني الثانوي_الفيزياء': ['أ. د. محمد النور', 'أ. د. سارة الطاقة'],
      'الصف الثاني الثانوي_الكيمياء': ['أ. د. إبراهيم الجزيئات', 'أ. د. نسرين التفاعلات'],
      'الصف الثاني الثانوي_الأحياء': ['أ. د. أحمد الكائن', 'أ. د. نور الحياة'],
      'الصف الثاني الثانوي_الرياضيات': ['أ. د. كريم الجبر', 'أ. د. هدى الهندسة'],
      'الصف الثاني الثانوي_التاريخ': ['أ. د. حسام المؤرخ', 'أ. د. مروة الحضارات'],
      'الصف الثاني الثانوي_الجغرافيا': ['أ. د. عادل الجغرافي', 'أ. د. داليا الطبيعية'],
      'الصف الثاني الثانوي_الفلسفة': ['أ. د. وائل الفيلسوف', 'أ. د. نهى المنطق'],
      'الصف الثاني الثانوي_علم النفس': ['أ. د. أحمد النفس', 'أ. د. منى السلوك'],

      'الصف الثالث الثانوي العلمي - رياضة_اللغة العربية': ['أ. د. إبراهيم الأديب', 'أ. د. نسرين النحوي'],
      'الصف الثالث الثانوي العلمي - رياضة_اللغة الإنجليزية': ['Prof. Emma Watson', 'Dr. Michael Johnson'],
      'الصف الثالث الثانوي العلمي - رياضة_التربية الدينية': ['أ. د. علي الشافعي', 'أ. د. فاطمة الزهراء'],
      'الصف الثالث الثانوي العلمي - رياضة_التربية الوطنية': ['أ. عمر الوطني', 'أ. ليلي المواطنة'],
      'الصف الثالث الثانوي العلمي - رياضة_الرياضيات البحتة': ['أ. د. كريم الجبر', 'أ. د. هدى الهندسة'],
      'الصف الثالث الثانوي العلمي - رياضة_الرياضيات التطبيقية': ['أ. د. محمود الديناميكا', 'أ. د. سمر الاستاتيكا'],
      'الصف الثالث الثانوي العلمي - رياضة_الفيزياء': ['أ. د. محمد النور', 'أ. د. سارة الطاقة'],
      'الصف الثالث الثانوي العلمي - رياضة_الكيمياء': ['أ. د. إبراهيم الجزيئات', 'أ. د. نسرين التفاعلات'],

      'الصف الثالث الثانوي العلمي - علوم_اللغة العربية': ['أ. د. إبراهيم الأديب', 'أ. د. نسرين النحوي'],
      'الصف الثالث الثانوي العلمي - علوم_اللغة الإنجليزية': ['Prof. Emma Watson', 'Dr. Michael Johnson'],
      'الصف الثالث الثانوي العلمي - علوم_التربية الدينية': ['أ. د. علي الشافعي', 'أ. د. فاطمة الزهراء'],
      'الصف الثالث الثانوي العلمي - علوم_التربية الوطنية': ['أ. عمر الوطني', 'أ. ليلي المواطنة'],
      'الصف الثالث الثانوي العلمي - علوم_الأحياء': ['أ. د. عمر الأحياء', 'أ. د. زينب الجينات'],
      'الصف الثالث الثانوي العلمي - علوم_الجيولوجيا': ['أ. د. محمود الجيولوجيا', 'أ. د. سمر الصخور'],
      'الصف الثالث الثانوي العلمي - علوم_الفيزياء': ['أ. د. محمد الضوء', 'أ. د. سارة الصوت'],
      'الصف الثالث الثانوي العلمي - علوم_الكيمياء': ['أ. د. إبراهيم الذرات', 'أ. د. نسرين الروابط'],

      'الصف الثالث الثانوي الأدبي_اللغة العربية': ['أ. د. إبراهيم الأديب', 'أ. د. نسرين النحوي'],
      'الصف الثالث الثانوي الأدبي_اللغة الإنجليزية': ['Prof. Emma Watson', 'Dr. Michael Johnson'],
      'الصف الثالث الثانوي الأدبي_التربية الدينية': ['أ. د. علي الشافعي', 'أ. د. فاطمة الزهراء'],
      'الصف الثالث الثانوي الأدبي_التربية الوطنية': ['أ. عمر الوطني', 'أ. ليلي المواطنة'],
      'الصف الثالث الثانوي الأدبي_التاريخ': ['أ. د. حسام المؤرخ', 'أ. د. مروة الحضارات'],
      'الصف الثالث الثانوي الأدبي_الجغرافيا': ['أ. د. عادل الجغرافي', 'أ. د. داليا الطبيعية'],
      'الصف الثالث الثانوي الأدبي_الفلسفة والمنطق': ['أ. د. وائل الفيلسوف', 'أ. د. نهى المنطق'],
      'الصف الثالث الثانوي الأدبي_علم النفس والاجتماع': ['أ. د. أحمد النفس', 'أ. د. منى السلوك'],
      'الصف الثالث الثانوي الأدبي_الاقتصاد': ['أ. د. إبراهيم الاقتصاد', 'أ. د. نسرين السوق'],
    };

    const subjectsData = {
      // Kindergarten
      'KG1 & KG2': ['الرياضيات', 'اللغة الإنجليزية', 'اللغة العربية', 'التربية الفنية', 'الرياضيات المتقدمة', 'التربية الدينية'],

      // Primary Grades
      'الصف الأول الابتدائي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'اللغة الفرنسية', 'اللفة الألمانية', 'اللغة الإيطالية', 'التربية الدينية'],
      'الصف الثاني الابتدائي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],
      'الصف الثالث الابتدائي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],
      'الصف الرابع الابتدائي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],
      'الصف الخامس الابتدائي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],
      'الصف السادس الابتدائي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],

      // Preparatory Grades
      'الصف الأول الإعدادي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'اللغة الفرنسية', 'اللغة الألمانية', 'اللغة الإيطالية', 'التربية الدينية'],
      'الصف الثاني الإعدادي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],
      'الصف الثالث الإعدادي': ['العلوم', 'الرياضيات', 'الدراسات الاجتماعية', 'التكنولوجيا', 'اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية'],

      // Secondary Grades
      'الصف الأول الثانوي': ['اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية', 'التربية الوطنية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الرياضيات', 'التاريخ', 'الجغرافيا', 'الفلسفة', 'علم النفس'],
      'الصف الثاني الثانوي': ['اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية', 'التربية الوطنية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الرياضيات', 'التاريخ', 'الجغرافيا', 'الفلسفة', 'علم النفس'],
      'الصف الثالث الثانوي العلمي - رياضة': ['اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية', 'التربية الوطنية', 'الرياضيات البحتة', 'الرياضيات التطبيقية', 'الفيزياء', 'الكيمياء'],
      'الصف الثالث الثانوي العلمي - علوم': ['اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية', 'التربية الوطنية', 'الأحياء', 'الجيولوجيا', 'الفيزياء', 'الكيمياء'],
      'الصف الثالث الثانوي الأدبي': ['اللغة العربية', 'اللغة الإنجليزية', 'التربية الدينية', 'التربية الوطنية', 'التاريخ', 'الجغرافيا', 'الفلسفة والمنطق', 'علم النفس والاجتماع', 'الاقتصاد'],
    };

    // A simple mapping from subject name (or part of it) to image filename
    const subjectImages = {
      'الرياضيات': 'math.png',
      'العلوم': 'science.png',
      'اللغة العربية': 'arabic.png',
      'اللغة الإنجليزية': 'english.png',
      'الدراسات الاجتماعية': 'history.png',
      'التكنولوجيا': 'computer.png',
      'اللغة الفرنسية': 'french.png',
      'اللغة الألمانية': 'german.png',
      'اللغة الإيطالية': 'italian.png',
      'الفيزياء': 'physics.png',
      'الكيمياء': 'chemistry.png',
      'الأحياء': 'biology.png',
      'الجيولوجيا': 'geology.png',
      'التاريخ': 'history.png',
      'الجغرافيا': 'geography.png',
      'الفلسفة': 'philosophy.png',
      'علم النفس': 'psychology.png',
      'الاقتصاد': 'economics.png',
      'التربية الفنية': 'art.png',
      'التربية الدينية': 'religious.png', // New image for religious education
      'التربية الوطنية': 'civics.png',
      // Add more mappings for other specific subjects
    };

    // Add a mapping for courses to images
    const courseImages = {
      'كورس Adobe Photoshop': 'photoshop.png',
      'كورس Microsoft Office': 'office.png',
      'كورس أساسيات البرمجة (Python)': 'python.png',
      'كورس اللغة الإنجليزية الشامل': 'english-course.png',
      'كورس النحو والصرف العربي': 'arabic-grammar.png',
      'كورس اللغة الألمانية': 'german-course.png',
      'كورس اللغة الإيطالية': 'italian-course.png',
      'كورس مهارات سوق العمل الاحترافية': 'job-skills.png',
    };

    // Simulated user data (for registration/login)
    const users = {}; // Stores registered users { username: { email, password } }

    // --- General Modal Functions ---
    function openModal(modalId) {
        const spinnerId = modalId.replace('Overlay', 'Spinner');
        const spinner = document.getElementById(spinnerId);
        const list = document.getElementById(modalId).querySelector('ul');
        if (spinner) { // Check if spinner exists for this modal
            spinner.classList.add('show'); // Show spinner
        }
        if (list) {
            list.style.display = 'none'; // Hide list until loaded
        }
        document.getElementById(modalId).classList.add('show');

        // Simulate loading for 500ms
        setTimeout(() => {
            if (spinner) {
                spinner.classList.remove('show'); // Hide spinner
            }
            if (list) {
                list.style.display = 'block'; // Show content
            }
        }, 500);
    }

    function closeModal(modalId) {
        document.getElementById(modalId).classList.remove('show');
        const list = document.getElementById(modalId).querySelector('ul');
        if (list) {
            list.style.display = 'none'; // Hide content when closing
        }
    }

    // --- Sidebar Functions ---
    function openNav() {
      document.getElementById("mySidebar").style.width = "280px";
      document.body.style.marginRight = "280px";
      document.body.classList.add('sidebar-open');
    }

    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.body.style.marginRight = "0";
      document.body.classList.remove('sidebar-open');
    }

    // --- Specific Modals (Grades, Subjects, Teachers, Courses, Books) ---

    function showGradesModal(stageName) {
      closeNav();
      const gradesModalTitle = document.getElementById('gradesModalTitle');
      const gradesList = document.getElementById('gradesList');

      gradesList.innerHTML = '';
      gradesModalTitle.textContent = `السنوات الدراسية في ${stageName}`;

      const grades = educationalStagesData[stageName] || ['لا توجد سنوات دراسية متاحة لهذه المرحلة حالياً.'];

      grades.forEach(grade => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="fas fa-graduation-cap"></i> ${grade}`;
        listItem.onclick = () => showSubjectsModal(grade);
        gradesList.appendChild(listItem);
      });
      openModal('gradesOverlay');
    }

    function showSubjectsModal(gradeName) {
      closeModal('gradesOverlay');
      const subjectsModalTitle = document.getElementById('subjectsModalTitle');
      const subjectsList = document.getElementById('subjectsList');

      subjectsList.innerHTML = '';
      subjectsModalTitle.textContent = `مواد ${gradeName}`;

      const subjects = subjectsData[gradeName] || ['لا توجد مواد متاحة لهذه السنة الدراسية حالياً.'];

      if (subjects.length === 1 && subjects[0].includes('لا توجد')) {
          const listItem = document.createElement('li');
          listItem.textContent = subjects[0];
          subjectsList.appendChild(listItem);
      } else {
          subjects.forEach(subject => {
            const listItem = document.createElement('li');
            const imageSrc = `${subjectImages[subject] || 'general.png'}`;
            listItem.innerHTML = `
              <div style="display: flex; align-items: center;">
                <img src="${imageSrc}" alt="${subject}" loading="lazy" style="width: 40px; height: 40px; margin-left: 10px; border-radius: 5px;">
                <span>${subject}</span>
              </div>
            `;
            listItem.onclick = () => showTeachersModal(`${gradeName}_${subject}`, subject);
            subjectsList.appendChild(listItem);
          });
      }
      openModal('subjectsOverlay');
    }

    function showTeachersModal(subjectKey, subjectDisplayName) {
      closeModal('subjectsOverlay');
      const teachersModalTitle = document.getElementById('teachersModalTitle');
      const teachersList = document.getElementById('teachersList');

      teachersList.innerHTML = '';
      teachersModalTitle.textContent = `مدرسو مادة ${subjectDisplayName}`;

      const teachers = teachersData[subjectKey] || ['لا يوجد مدرسون متاحون لهذه المادة حالياً.'];

      teachers.forEach(teacher => {
        const listItem = document.createElement('li');
        const price = getRandomPrice();
        listItem.innerHTML = `
          <span><i class="fas fa-chalkboard-teacher"></i> ${teacher}</span>
          <span class="price">${price}</span>
        `;
        teachersList.appendChild(listItem);
      });
      openModal('teachersOverlay');
    }

    function showCoursesModal() {
      closeNav();
      const coursesList = document.getElementById('coursesList');
      coursesList.innerHTML = '';

      const coursesDataList = [
        { name: 'كورس Adobe Photoshop', price: 150 },
        { name: 'كورس Microsoft Office', price: 120 },
        { name: 'كورس أساسيات البرمجة (Python)', price: 180 },
        { name: 'كورس اللغة الإنجليزية الشامل', price: 170 },
        { name: 'كورس النحو والصرف العربي', price: 130 },
        { name: 'كورس اللغة الألمانية', price: 160 },
        { name: 'كورس اللغة الإيطالية', price: 140 },
        { name: 'كورس مهارات سوق العمل الاحترافية', price: 110 },
      ];

      coursesDataList.forEach(course => {
        const listItem = document.createElement('li');
        const imageSrc = `${courseImages[course.name] || 'default-course.png'}`;
        listItem.innerHTML = `
          <div style="display: flex; align-items: center;">
            <img src="${imageSrc}" alt="${course.name}" loading="lazy" style="width: 40px; height: 40px; margin-left: 10px; border-radius: 5px;">
            <span>${course.name}</span>
          </div>
          <span class="price">${course.price}</span>
        `;
        coursesList.appendChild(listItem);
      });

      openModal('coursesOverlay');
    }

    function showBooksModal() {
      closeNav();
      // Books list is static in HTML, so no need to populate
      openModal('booksOverlay');
    }

    // --- Auth Modal Functions (New) ---
    function openAuthModal(formType = 'login') {
        closeNav(); // Close sidebar if open
        document.getElementById('authOverlay').classList.add('show');
        showAuthTab(formType);
    }

    function showAuthTab(tabName) {
        document.querySelectorAll('.auth-tabs button').forEach(button => button.classList.remove('active'));
        document.querySelectorAll('.auth-content > div').forEach(content => content.classList.remove('active'));

        if (tabName === 'login') {
            document.getElementById('loginTab').classList.add('active');
            document.getElementById('loginForm').classList.add('active');
            document.getElementById('loginMessage').textContent = ''; // Clear message
        } else if (tabName === 'register') {
            document.getElementById('registerTab').classList.add('active');
            document.getElementById('registerForm').classList.add('active');
            document.getElementById('registerMessage').textContent = ''; // Clear message
        }
    }

    function displayAuthMessage(elementId, message, type) {
        const messageElement = document.getElementById(elementId);
        messageElement.textContent = message;
        messageElement.className = `auth-message ${type}`; // Set class for styling (success/error)
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'auth-message';
        }, 3000); // Clear message after 3 seconds
    }

    function handleLogin() {
        const usernameInput = document.getElementById('loginUsername');
        const passwordInput = document.getElementById('loginPassword');
        const messageElementId = 'loginMessage';

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            displayAuthMessage(messageElementId, 'الرجاء إدخال اسم المستخدم وكلمة المرور.', 'error');
            return;
        }

        // Simulate login: Check if user exists and password matches
        const user = users[username]; // Check by username
        let loggedIn = false;
        if (!user) {
            // Also check by email if username is an email
            for (const uname in users) {
                if (users[uname].email === username) {
                    user = users[uname];
                    break;
                }
            }
        }

        if (user && user.password === password) {
            displayAuthMessage(messageElementId, 'تم تسجيل الدخول بنجاح! 🚀', 'success');
            sessionStorage.setItem('loggedInUser', user.username); // Store logged-in user
            updateHeaderButtons(user.username);
            updateWelcomeMessage();
            setTimeout(() => {
                closeModal('authOverlay');
                usernameInput.value = '';
                passwordInput.value = '';
            }, 1000); // Close modal after 1 second
        } else {
            displayAuthMessage(messageElementId, 'اسم المستخدم أو كلمة المرور غير صحيحة.', 'error');
        }
    }

    function handleRegister() {
        const usernameInput = document.getElementById('registerUsername');
        const emailInput = document.getElementById('registerEmail');
        const passwordInput = document.getElementById('registerPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const messageElementId = 'registerMessage';

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!username || !email || !password || !confirmPassword) {
            displayAuthMessage(messageElementId, 'الرجاء ملء جميع الحقول.', 'error');
            return;
        }

        if (password !== confirmPassword) {
            displayAuthMessage(messageElementId, 'كلمتا المرور غير متطابقتين.', 'error');
            return;
        }

        if (password.length < 6) {
            displayAuthMessage(messageElementId, 'يجب أن تكون كلمة المرور 6 أحرف على الأقل.', 'error');
            return;
        }

        if (users[username]) {
            displayAuthMessage(messageElementId, 'اسم المستخدم هذا مستخدم بالفعل.', 'error');
            return;
        }
        for (const uname in users) {
            if (users[uname].email === email) {
                displayAuthMessage(messageElementId, 'البريد الإلكتروني هذا مستخدم بالفعل.', 'error');
                return;
            }
        }

        // Simulate registration
        users[username] = { email: email, password: password };
        displayAuthMessage(messageElementId, 'تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول. 🎉', 'success');

        // Optionally pre-fill login form and switch to login tab
        setTimeout(() => {
            usernameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            confirmPasswordInput.value = '';
            document.getElementById('loginUsername').value = username;
            showAuthTab('login');
        }, 1500); // Wait a bit then switch to login form
    }

    function updateHeaderButtons(username = null) {
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const userInfo = document.getElementById('userInfo');

        if (username) {
            loginBtn.style.display = 'none';
            registerBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            userInfo.textContent = `أهلاً، ${username}!`;
            userInfo.classList.add('show');
        } else {
            loginBtn.style.display = 'block';
            registerBtn.style.display = 'block';
            logoutBtn.style.display = 'none';
            userInfo.classList.remove('show');
            userInfo.textContent = '';
        }
    }

    function logout() {
        sessionStorage.removeItem('loggedInUser'); // Clear logged-in user
        updateHeaderButtons(null);
        updateWelcomeMessage(); // Reset welcome message
        displayAuthMessage('loginMessage', 'تم تسجيل الخروج بنجاح.', 'success');
    }

    // --- Welcome Message Logic ---
    function updateWelcomeMessage() {
        const welcomeMessageElement = document.getElementById('welcomeMessage');
        const currentHour = new Date().getHours();
        let greeting;
        const loggedInUser = sessionStorage.getItem('loggedInUser');

        let timeOfDayGreeting;
        if (currentHour >= 5 && currentHour < 12) {
            timeOfDayGreeting = 'صباح الخير';
        } else if (currentHour >= 12 && currentHour < 18) {
            timeOfDayGreeting = 'مساء الخير';
        } else {
            timeOfDayGreeting = 'مساء الخير';
        }

        if (loggedInUser) {
            greeting = `${timeOfDayGreeting} ${loggedInUser}! 👋`;
        } else {
            greeting = `${timeOfDayGreeting}! 👋`;
        }
        welcomeMessageElement.textContent = greeting;
    }


    // --- Event Listeners for DOM Content Loaded ---
    document.addEventListener('DOMContentLoaded', () => {
      // Ensure header nav links open sidebar
      document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Stop page from jumping to top
          openNav(); // Open the sidebar
        });
      });

      // Initialize welcome message and header buttons on load
      const user = sessionStorage.getItem('loggedInUser');
      updateHeaderButtons(user);
      updateWelcomeMessage();
    });
