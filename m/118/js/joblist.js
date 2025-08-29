$(function () {

    var data = [

        { org: '航空工业上电', jobname: 'AI工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319844, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：计算机科学与技术、信息与通信工程、软件工程、模式识别与智能系统等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、从事图像识别与处理、手势识别、目标检测等计算机视觉方向研究工作；<br>2、从事语音识别、自然语言处理等人机语音交互方向研究工作；<br>3、从事机器学习、深度学习、算法理论研究等相关工作；<br>4、从事上述研究方向的应用开发、产品规划、原理样机研制等相关工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、精通语音识别、模式识别、神经网络、信号处理、机器学习等相关算法；<br>2、熟练掌握至少一种编程语言：C、C++、Java、python等；<br>3、熟练掌握至少一种开源框架，包括：Kaldi、TensorFlow、Pytorch、HTK等；<br>4、具备语音处理领域、图像处理领域、机器学习领域的项目经历；<br>5、有大规模数据训练或识别引擎系统开发和移植等实习工作经历者优先。<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319844&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319844' },

        { org: '航空工业上电', jobname: 'IE工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '产品工艺/制程工程师', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319845, type: '工艺类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：工业工程、数学、信息管理、电力电子等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责产能产线规划、生产现场优化、制造成本改善、工厂布局设计等方面相关工作。包含但不限于以下方面：<br>2、负责精益生产、IE改善技术的研究；<br>3、运用精益手法分析、发现问题，组织对当前制造相关流程、工艺方法、制造成本等提出改善建设方案；<br>4、根据产能情况组织开展例行性短中长期规划、组织设计解决方案并推动实施；<br>5、根据组织架构与规划发展需要，开展制造工厂布局设计与优化。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、了解电子行业相关制造标准，了解生产制造流程；<br>2、具备较强的统筹规划能力和系统协调能力；<br>3、具有良好的语言文字表达能力与结构化思维，具有团队合作精神.<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319845&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319845' },

        { org: '航空工业上电', jobname: '测试工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '产品工艺/制程工程师', place: '上海', education: '本科', tag: '互联网/计算机/电子类', jobid: 142319846, type: '工艺类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：自动化、电气工程、电子信息工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、处理电子产品故障原因分析定位；<br>2、进行新研电子产品调试测试；<br>3、编制电子产品故障排查定位方法以及知识积累；<br>4、编制电子产品专用测试设备技术需求书以及固定资产报告；<br>5、调研行业内在测试领域新技术，提升配电产品在测试方面工作效率；<br>6、研究设计产品测试工装优化测试方法。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有扎实的数字、模拟电路专业理论基础，熟悉单片机、DSP等处理器的原理及外围电路电路设计；<br>2、熟练使用常见万用表、示波器、电子负载仪表设备；<br>3、具有硬件电路电路分析和设计能力、调试和问题解决能力者优先；<br>4、熟悉C++、C#、Java、Python等编程语言者优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319846&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319846' },

        { org: '航空工业上电', jobname: '产品工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '产品工艺/制程工程师', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319847, type: '工艺类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：机械工程、自动化、光学工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、承担航空防务和非航空防务的产品制造工艺，根据产品图纸要求和产品规范要求编制工艺文件指导生产；<br>2、能够及时有效的处理装配现场在生产过程中的异常情况；<br>3、对生产过程中或外场使用中出现的故障，及时准确定位，快速排除；<br>4、积极研究新工艺，新方法，不断创新，提高现有工艺能力。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具备扎实的模电、数电和电路分析或光学的专业知识基础；<br>2、熟悉运用AutoCAD、protel等常用软件或熟悉LED照明及常用LED光学特性掌握一款光学软件；<br>3、工作踏实认真细致，有良好的沟通协调能力。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319847&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319847' },

        { org: '航空工业上电', jobname: '电磁兼容工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319848, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：电气工程、微电子学与固体电子学、电磁场与微波技术等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、参与产品电磁兼容性设计、分析、试验、验证等相关工作；<br>2、负责航空电子产品的结构屏蔽效能仿真，电路电磁辐射仿真，电路的SI/PI仿真等方面工作；<br>3、参与项目评审，对产品的电磁兼容性设计进行评估；并提供改进意见或者建议；<br>4、负责电容兼容性设计相关文档编制；<br>5、负责电磁兼容性相关流程的制定和改进。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟练使用或了解电磁兼容仪器设备、频谱仪、接收机等；<br>2、具备电磁场与微波技术相关专业的基础知识；<br>3、具备数电，模电、射频电路等相关专业的基础知识；<br>4、具有EMC测试或整改经验者优先；<br>5、工作勤恳、品行端正，有较强的的责任意识和良好的团队精神。 ', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319848&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319848' },

        { org: '航空工业上电', jobname: '电气工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '本科', tag: '互联网/计算机/电子类', jobid: 142319849, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：自动化、电气工程、机电一体化等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、按照项目要求完成方案、器件选型、原理图设计、调试、测试等工作，并负责产品的设计质量；<br>2、编写产品研制过程各种支撑性文件；<br>3、负责承担产品的生产、外场质量问题的处理及技术支持工作；<br>4、跟踪研究专业技术领域的技术发展；<br>5、开展配电控制技术的知识积累及成果申报。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有扎实的电气工程专业理论基础，熟悉工业、自动化电气设计；<br>2、熟练掌握caxa等电气图设计工具者优先；<br>3、具有工业自动化设备分析和设计能力、调试和问题解决能力者优先；<br>4、熟悉项目的统筹与管控，有良好的沟通协调能力，良好的团队精神。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319849&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319849' },

        { org: '航空工业上电', jobname: '工业设计工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '汽车/机械类', jobid: 142319850, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：工业设计、数字媒体艺术等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责航空、舰船、地面装备等产品的座舱工业设计相关工作；<br>2、通过高效准确的手绘草图和2D效果图，表达设计创意，沟通项目需求；<br>3、负责产品人机界面的研究和开发制作工作；<br>4、配合3D设计师，制作模型和场景所需的贴图及相关素材；<br>5、满足团队其他的设计技术支持需求，包括产品宣传材料设计，汇报材料配图等日常设计任务。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、艺术设计、工业设计、动画设计类专业背景，具有结构设计经验；<br>2、拥有良好的设计美学素养。思维开阔，对产品设计、人机交互设计等流行趋势具有前瞻把握能力；<br>3、熟悉PhotoShop、AI等2D设计软件，掌握3D设计软件；<br>4、清晰的产品设计思路，良好的团队合作意识、精益求精的工作心态。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319850&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319850' },

        { org: '航空工业上电', jobname: '工装设计工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '产品工艺/制程工程师', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319851, type: '工艺类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：机械设计及理论、机械工程、自动化等专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、设计产品生产的工装夹具，完成建模和设计图纸图；<br>2、审查工装设计图纸，编制工装夹具加工的工艺规程；<br>3、指导现场操作加工，解决零件加工过程中的各种技术、质量问题，并策划改进；<br>4、开展策划工艺攻关、工艺革新、现场改善以及新材料、新工艺的研究。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有扎实的机械专业基础，熟悉机械加工原理、机械加工工艺流程；  <br>2、掌握CAXA或AutoCAD或solidworks等二维三维制图软件工具；<br>3、熟悉Mastercam或Catia或UG软件工具，能零件编程者优先；<br>4、具有自动化理念和创新思想者优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319851&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319851' },

        { org: '航空工业上电', jobname: '光学工程师（激光强光照明）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '汽车/机械类', jobid: 142319852, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：光学科学与技术、光学工程、物理学等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、配合系统工程师进行需求管理保障工作；<br>2、按需求分解出光学子需求，开展光学零件、组件设计工作，开展光学仿真确定光学详细设计方案；<br>3、负责产品设计、制造、验证、交付过程中光学设计迭代和技术问题处理；<br>4、负责产品评审基础支撑工作，根据评审意见认真落实技术归零，完成光学专业所需文件编制；<br>5、负责产品光学图纸出版工作，负责光学零部组件、装配等图出版工作；<br>6、负责系统/产品光性能测试验证、照明实验工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、至少熟练使用一款光学软件（DIALux、TracePro、lightools等）；<br>2、对几何光学有较深理论基础；<br>3、对光学零组件加工工艺、注塑模具、滤光材料等有基本认识；<br>4、具有较强的沟通能力、高度责任心、良好的创新精神和团队精神；<br>5、有LED光源或照明环境光学设计仿真课题经验者优先。<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319852&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319852' },

        { org: '航空工业上电', jobname: '光学工程师（拒止类武器）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '博士', tag: '汽车/机械类', jobid: 142319853, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：博士研究生<br>',attr1:'所需专业：光学、光学工程、测试计量技术及仪器等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责激光应用光学方向前沿技术跟踪、调研和课题申报工作；<br>2、负责调研及对接客户需求，规划新产品技术路线，并完成技术预研工作；<br>3、负责光学零件、组件设计工作，开展光学仿真确定光学详细设计方案；<br>4、负责产品设计、制造、验证、交付过程中光学设计迭代和技术问题处理；<br>5、负责系统/产品光性能测试验证、照明实验工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟练掌握Zeamx、CodeV等光学设计工具，掌握成像、照明、检测的技术原理，能够设计光学系统实现功能性能指标；<br>2、熟悉激光器、成像光学元件、激光光学元件等光学测试设备，了解国内外激光器发展现状和光学元件主流加工水平，精通成像光学设计；<br>3、精通光学系统性能评价指标以及判断标准，精通必要的光学检测设备以及测量方法；<br>4、具备扎实的光学理论基础，熟悉物理光学和几何光学，对光学理论有着深刻的认识，能够根据设计等要求独立完成光学仪器设备及各光学器件选型和测试，提供完整可行的光学系统解决方案。<br>5、有激光光源、激光材料或照明环境光学设计仿真课题经验者优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319853&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319853' },

        { org: '航空工业上电', jobname: '结构工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '汽车/机械类', jobid: 142319854, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士研究生<br>',attr1:'所需专业：机械制造及其自动化、机械设计及理论、机械工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责与用户协调沟通产品相关的技术条件，并给予用户相关支持；<br>2、负责产品结构部分的设计及相关工作，包括器件选型、建立三维模型、以及结构部分图纸出版；<br>3、负责产品相关文档的编写，并参加产品相关的各类评审；<br>4、开展现有器件的质量提升涉及的制造技术攻关。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、扎实的机械专业知识，理论力学、材料力学、机械原理、机械设计、电工电子成绩优秀；<br>2、熟悉机械制图、工程力学、材料加工，能够熟练使用AUTOCAD、CATIA、Altium Designer等设计软件；<br>3、具有精益求精的工作心态、良好的团队合作意识、较强的创新能力；<br>4、具备结构专业CAE软件仿真分析能力者优先考虑；<br>5、具有结构设计的项目经历，并完成全部生产过程的优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319854&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319854' },

        { org: '航空工业上电', jobname: '近地告警工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319855, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：制导与控制技术、控制理论与控制工程、飞行器设计与工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、战斗机或直升机飞行动力学特性建模与研究；<br>2、实时规避预测、轨迹规划与控制算法研究；<br>3、自动防撞关键技术研究与攻关；<br>4、开展地形辅助导航，在飞机近地告警、导航定位等方面的工程化应用研究；<br>5、根据技术规划和市场需求，完成相应导航定位算法开发工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、导航、制导与控制，飞行控制，控制工程与控制理论相关专业,硕士或博士；<br>2、具有飞行动力学建模及控制系统设计仿真经验优先；<br>3、具有近地告警/地形防撞/地形跟随/地形规避等相关方向研究经验者优先；<br>4、具有较强的独立科研能力，能熟练进行文献检索和综述。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319855&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319855' },

        { org: '航空工业上电', jobname: '可靠性工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319856, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：电子信息工程、通信工程、自动化、可靠性等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责电子类及机电类产品的可靠性、安全性、维修性、测试性等工作；<br>2、负责可靠性指标实现，提供有效的可靠性技术支持；<br>3、参与审核并指导产品的可靠性设计与分析；<br>4、组织并推动项目开展FMEA、FTA等工作；<br>5、负责可靠性试验的策划管理及大纲编制指导工作；<br>6、能够对试验数据进行分析并根据产品外场使用数据进行可靠性评估工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟悉电子类产品可靠性、维修性和测试性设计工作流程；<br>2、掌握电子类产品可靠性设计和分析方法，如分配、预计、FMECA等；<br>3、了解结构建模软件如CATIA、Solidworks、ProE等的使用，了解电路设计软件Altium Designer的使用；<br>4、模电基础知识扎实，能读懂电路原理图，熟悉常见电子元器件封装形式，失效模式和失效机制；<br>5、熟悉电子产品测试性设计，并有过相关项目经验者优先考虑。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319856&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319856' },

        { org: '航空工业上电', jobname: '软件工程师（测试方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '本科', tag: '互联网/计算机/电子类', jobid: 142319857, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：计算机科学与技术、软件工程、机械工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责产品软件测试、验证及相关研制文档输出；<br>2、负责产品软件编码调试、测试；<br>3、负责产品功能验证、调试检测及故障处理工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、掌握使用Keil工具进行单片机平台的软件编译、程序烧录；<br>2、掌握使用quatusII工具进行CPLD程序的烧写；<br>3、掌握使用xilinx工具进行FPGA程序的开发；<br>4、有testbed软件使用经验者优先考虑。<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319857&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319857' },

        { org: '航空工业上电', jobname: '软件工程师（嵌入式方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319858, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：计算机科学与技术、自动化、软件工程、机械工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、嵌入式系统产品驱动开发，配合硬件调试、验证；<br>2、嵌入式产品软件开发，嵌入式软件编码实现，调试；<br>3、完成通信接口协议定义，实现通信控制、功能模块级联试；<br>4、负责完成产品的测试工作，如单元测试、单元集成测试、配置项测试系统测试；<br>5、参与编制软件研发过程中的文档。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟悉单片机、DSP、Linux、Vxworks等一种或者多种嵌入式平台；<br>2、熟悉C/C++/C#，有良好的编程习惯和技巧及技术文档写作能力；<br>3、具有数电模电基础，熟悉软件开发流程；<br>4、熟悉基本的软件测试理论，熟悉软件测试的基本方法、流程和规范；<br>5、具有良好的沟通能力和团队合作能力，具有强烈的责任人和钻研精神；<br>6、具有嵌入式软件的项目经验者优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319858&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319858' },

        { org: '航空工业上电', jobname: '软件工程师（上位机方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319859, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：计算机科学与技术、地理信息系统、软件工程、自动化等相关专业       <br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责项目软件的需求分析、设计、开发；<br>2、负责项目的上位机软件代码编写；<br>3、负责与硬件工程师配合完成项目的调试、测试任务，及问题分析与解决；<br>4、负责完成系统的性能、稳定性等软件优化工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟悉C、C++或C#等语言，熟悉VC++、QT、VS等开发环境；<br>2、熟练掌握C/C++标准库盒常用扩展库的用法，熟悉主流的C++设计模式；<br>3、具有良好编程习惯和技巧及技术文档编写能力；<br>4、具备较强的沟通和团队协作能力，工作严谨、思路清晰、责任心强<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319859&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319859' },

        { org: '航空工业上电', jobname: '视景工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319860, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：计算机图形学、地理信息系统、通信工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责基于地理信息数据的三维地形场景建模（合成视景系统）的研究；<br>2、负责合成视景系统的技术攻关及算法的迭代优化设计；<br>3、负责或协助完成基于OpenGL的合成视景技术软件工程化。<br>4、开展机载视景系统中的图形显示、渲染等方面的理论及工程化应用研究；<br>5、根据需求，参与图形引擎的建模与算法设计；<br>6、参与大规模数字地图在机载视景系统中应用及仿真；<br>7、建立相关算法模型、编制相关文档及其他相关工作<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有较强的数学基础和计算机图形学理论知识，良好的线性代数、空间解析几何能力；<br>2、熟悉图形引擎底层技术原理、渲染流程和性能优化方法；熟悉图形引擎开发流程，具有飞行仿真、游戏引擎开发经验者优先；<br>3、熟练使用C/C++语言及OpenGL图形开发库，有嵌入式开发及图形引擎性能优化经验者优先；<br>4、工作主动认真，具有较强的学习能力，乐于沟通，有团队意识。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319860&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319860' },

        { org: '航空工业上电', jobname: '试验工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '电气工程师/技术员', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319861, type: '专业技术类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：电气工程、机械设计制造及自动化、力学等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、按试验规程或技术规范、试验大纲进行各种试验，并真实有效地填写试验原始记录；<br>2、解决试验过程中的技术难题，配合故障分析、处理；<br>3、参与试验过程中发现的各种故障的分析处理，并提出处理意见，不断完善试验操作过程<br>4、编制有试验类产品标准，促进试验操作规范化。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟练使用实验室测试仪器，如示波器，频谱分析仪等；<br>2、具备基本的电工电路基础，能看懂电路原理图，有可靠性试验数据统计分析能力；<br>3、具有较强的沟通能力、高度负责心、良好的创新精神和团队精神；<br>4、有环境实验室实习经验者优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319861&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319861' },

        { org: '航空工业上电', jobname: '适航工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '电气工程师/技术员', place: '上海', education: '本科', tag: '互联网/计算机/电子类', jobid: 142319862, type: '专业技术类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：航空工程、电气工程、适航等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责适航标准、规章及相关技术资料收集与分析；<br>2、负责与客户、局方及其他适航机构进行适航技术问题沟通、协调；<br>3、负责为产品适航要求确定适航性设计、验证等相关工作的技术咨询指导，监督适航要求的落实，确保相关工作满足适航要求。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、对适航规章、标准和管理程序有一定了解;<br>2、熟悉相关航空机载设备设计、制造及质量；<br>3、具有一定的英文读写能力。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319862&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319862' },

        { org: '航空工业上电', jobname: '图像处理工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '汽车/机械类', jobid: 142319863, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：自动化、计算机科学与技术、电子信息工程、电子与通信工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、开展数字地图数据库（DEM数据、遥感影像数据）的数据处理与分析；<br>2、负责数字地图数据的数据安全相关技术研究；<br>3、围绕数字地图开展航空领域的数字地图应用研究；<br>4、负责相关技术的工程化转化研究；<br>5、负责开展数字地图相关的系统功能测试工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有数字地图数据处理及航空航天类研究背景优先；<br>2、能够熟悉操作ArcGIS等专业软件；<br>3、熟悉C/C++,有嵌入式工程开发经验优先；<br>4、工作主动认真，具有较强的学习能力，乐于沟通，有团队意识。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319863&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319863' },

        { org: '航空工业上电', jobname: '项目管理', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '电气工程师/技术员', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319864, type: '专业技术类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：工业工程、工程管理、电子电器等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、在授权范围内组织开展项目合同/协议谈判；<br>2、组织开展项目整体策划，包括项目WBS、项目进度、预算和成本、风险管控等；<br>3、负责组织开展项目的各项评审活动；<br>4、负责项目实施过程的监督、协调等工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有工业工程、机械或电子电器专业专业知识，具有项目管理相关知识；<br>2、认真负责、积极主动、沟通能力 强、团队意识强；<br>3、有较强的独立解决问题能力、沟通、语言表达能力强。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319864&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319864' },

        { org: '航空工业上电', jobname: '验证工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319865, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：自动化、仪器仪表、电力电子等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责项目系统需求测试用例的设计、验证计划的制定；<br>2、负责规划搭建系统测试环境，编制测试规程，明确判定准则；<br>3、依据需求验证计划，负责 编制系统验证矩阵，参与制定系统集成测试方案；<br>4 、负责项目验证文档的编制与出版；<br>5 、负责设备级需求测试用例的设计与编制；<br>6、参与问题的分析与解决；<br>7、参与验证数据的核查工作并确保所有生命周期数据满足项目的要求。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1 、具备一定的产品研发测试经验；<br>2 、了解、熟悉系统工程理论；<br>3 、具有较强的解决问题、分析问题和动手能力；<br>4 、熟悉了解NI通用测试板卡性能；<br>5、熟练的英文读写能力；<br>6 、具备较强的判断、沟通、协调能力；<br>7 、具有航空产品验证工作经验者优先。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319865&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319865' },

        { org: '航空工业上电', jobname: '硬件工程师（PCB方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '本科', tag: '互联网/计算机/电子类', jobid: 142319866, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：自动化、电气工程、机电一体化等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责产品硬件电路设计及PCB设计，完成相关技术文档编制；<br>2、负责产品功能验证、调试检测及故障处理工作；<br>3、配合系统工程师进行需求管理保障工作；<br>4、配合解决内场及外场的质量问题。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有扎实的数字、模拟电路专业理论基础和较强的电路分析能力；<br>2、熟练使用至少1种电路设计EDA软件和1种电路仿真EDA软件；<br>3、熟悉至少1种单片机、DSP等处理器及电路设计，具备相关设计和调试经验；<br>4、学习能力强、责任心强，具备良好的协调沟通能力，有团队合作精神。<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319866&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319866' },

        { org: '航空工业上电', jobname: '硬件工程师（高压配电方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '博士', tag: '互联网/计算机/电子类', jobid: 142319867, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：博士研究生<br>',attr1:'所需专业：电气工程、电子信息工程、电力电子等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责对安排的配电产品技术状态进行确认，主管设计（编制）研制方案；<br>2、在产品设计需根据经验考虑可靠性、维修性、综合保障性、安全性、测试性、环境适应性、可制造性等工程技术要求，优化设计，不断改进提高设计工作质量，对因设计原因造成最终产品的质量问题承担责任；<br>3、结合公司的工艺技术能力最大限度地采用已有的成熟技术和科研成果，尽可能开展通用化、系列化、模块化设计，提高产品的可靠性。对采用的新技术、新器材、新方法，应经过充分论证、试验鉴定；<br>4、产品研制过程的生产、装配、试验等各个环节提供技术支持，及时处理或协助处理产品研制中发生的质量问题。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有高压配电研发经验；<br>2、研究方向为高压大电流SSPC技术；<br>3、有解决均流、散热等技术瓶颈的经验；<br>4、能够跟踪产品研发过程，并提供持续改进方案的能力；<br>5、能够合理调配相关资源，使项目进度最优。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319867&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319867' },

        { org: '航空工业上电', jobname: '硬件工程师（固态功率配电方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319869, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：自动化、电子信息工程、计算机科学与技术、电力电子等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责对安排的配电产品技术状态进行确认，提供计划节点参考意见，参与设计（编制）研制方案；<br>2、在产品设计中，充分考虑可靠性、维修性、综合保障性、安全性、测试性、环境适应性、可制造性等工程技术要求；<br>3、负责产品在研制过程的生产、装配、试验等各个环节提供技术支持，及时处理或协助处理产品研制中发生的质量问题，确保研制过程的有序进行。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟悉嵌入式技术、EMC技术，具有扎实的数字、模拟电路专业理论基础和较强的电路分析能力；<br>2、熟练掌握PROTEL/DXP/MENTOR等电路设计工具，能熟练进行PCB设计；<br>3、具有单片机/DSP/PowerPC/ARM等平台硬件开发经验，有高速处理平台开发经验者优先考虑；<br>4、熟悉飞机供配电系统优先考虑。<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319869&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319869' },

        { org: '航空工业上电', jobname: '硬件工程师（照明驱动与控制方向）', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '技术研发工程师', place: '上海', education: '硕士', tag: '互联网/计算机/电子类', jobid: 142319870, type: '研发类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：硕士及以上<br>',attr1:'所需专业：自动化、电子信息工程、机电一体化等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责与用户协调沟通产品相关的技术条件，并给予用户相关支持；<br>2、负责产品硬件部分的设计及相关工作；<br>3、负责产品方案的设计；<br>4、负责产品元器件选型、原理图设计、PCB设计。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、熟练掌握PROTEL/DXP/MENTOR等电路设计工具，能熟练进行PCB设计；<br>2、熟悉嵌入式技术、EMC技术，具有扎实的数字、模拟电路专业理论基础和较强的电路分析能力；<br>3、清晰的产品设计思路，良好的团队合作意识、精益求精的工作心态；<br>4、具有单片机/DSP/PowerPC/ARM等平台硬件开发经验，有高速处理平台开发经验者优先考虑；<br>5、具有CPLD/FPGA（Xilinx）设计经验，有FIFO、RAM、串并转换等项目经验者优先考虑。<br>', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319870&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319870' },

        { org: '航空工业上电', jobname: '质量工程师', company: '(7359125)上海航空电器有限公司', companyid: 7359125, functype: '电气工程师/技术员', place: '上海', education: '本科', tag: '汽车/机械类', jobid: 142319871, type: '专业技术类', none: '-', nature: '全职', limit: '在校生/应届生', num: 0, money: '1500以下', desp: '学历要求：本科及以上<br>',attr1:'所需专业：工业工程、机械工程、电气工程等相关专业<br>',attr2:'<span class="zz">•&nbsp;岗位职责：</span><br>1、负责所承担产品的质量策划工作，编制质量计划 ，并组织监督实施；<br>2、参与项目各类评审及审查工作，监督、检查问题的落实，确保产品质量过程受控；<br>3、负责所有内/外部问题报告的管理，组织、协调所有问题的确认、临时处理、分析纠正预防等工作；<br>4、负责组织质量目标的统计 、分析及改善工作。<br>',attr3:'<span>•&nbsp;任职要求：</span><br>1、具有工业工程、机械或电子电器专业专业知识；<br>2、认真负责、积极主动、沟通能力强、团队意识强；<br>3、有较强的独立解决问题能力、沟通、语言表达能力强；<br>4、具有与技术相关的英语读写能力。', url_pc: 'https://xyz.51job.com/external/apply.aspx?jobid=142319871&ctmid=6393432', url_h5: 'https://xym.51job.com/personal/personal_applyjob.aspx?ctmid=6393432&jobid=142319871' }

    ]

 

    // var functypes = []

    // for (var i = 0; i < data.length; i++) {

    //     if (functypes.indexOf(data[i].type) === -1) {

    //         functypes.push(data[i].type)

    //         $('#functype').append('<option value="' + data[i].type + '">' + data[i].type + '</option>')

    //     }

    // }



    // var educations = []

    // for (var i = 0; i < data.length; i++) {

    //     if (educations.indexOf(data[i].education) === -1) {

    //         educations.push(data[i].education)

    //         $('#education').append('<option value="' + data[i].education + '">' + data[i].education + '</option>')

    //     }

    // }



    function getJobList() {

        var type = $('.types li.active').text()

        // var functype = $('#functype').val()

        var education = $('#education').val()



        // console.log(type, functype, education)



        var jobs = []



        $.each(data, function (i, item) {

            if (item.type.indexOf(type) !== -1 && item.education.indexOf(education) !== -1) {

                jobs.push(item)

            }

        })



        console.log(jobs)



        var htmls = ''

        $.each(jobs, function (i, item) {

            htmls += `<li>

            <div class="jobname">

              <div class="name">${item.jobname}</div>

              <div class="showBtn">

                <span>查看详情</span>

                <img src="./images/icon_arrow.png" alt="">

              </div>

            </div>

            <div class="txts">
            <p class="border"><img src="./images/xl.png" alt="" class="xl xl1"> ${item.desp}</p>



            <p class="border"><img src="./images/sxzy.png" alt="" class="xl">${item.attr1}</p>


              <p>${item.attr2}</p>

              <p>${item.attr3}</p>
              <div class="btn">

                <a class="apply" href="${item.url_pc}">

                  <img src="./images/pic_apply.png" alt="">

                </a>

              </div>

            </div>

          </li>`

        })



        $('.jobs').html(htmls)



        $('.jobs .showBtn').click(function () {

            $(this).parent().parent().toggleClass('active')

            $(this).parent().next().slideToggle()

        })

    }



    $('.types li').click(function () {

        $('.types li').removeClass('active')

        $(this).addClass('active')

        getJobList()

    })



    $('.types li').eq(0).click()



    $('#functype').change(function (event) {

        event.stopPropagation()

        getJobList()

    });

    $('#education').change(function (event) {

        event.stopPropagation()

        getJobList()

    });



    $('.search').click(function () {

        getJobList()

    })

});