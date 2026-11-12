window.LESSONS.push(...[
  {
    "id": "course-map",
    "chapter": 1,
    "title": "从真实信号到数字处理",
    "english": "Introduction",
    "book": 1,
    "slides": [],
    "intro": "先定义信号、误差与目标，再选择处理工具。",
    "concept": [
      "真实信号的数学模型要区分时间和幅值：离散时间表示只在整数序号上定义；数字信号还把幅值限制为有限精度。",
      "数字处理常包含抗混叠、采样、量化、运算与重建。采样限制时间信息，量化限制幅值精度，两类误差要分开判断。",
      "第2—5章建立序列、变换与系统分析；第6—9章讨论实现、设计和DFT计算；第10—13章应用于频谱、参数模型、Hilbert变换和倒谱。"
    ],
    "formulas": [
      "t_n=nT,\\quad f_s=1/T"
    ],
    "steps": [
      "写出物理单位、带宽和要保留的信息。",
      "确定采样与精度要求，再规定可验证的输出指标。"
    ],
    "pitfalls": [
      "不要把离散时间与数字当作完全同义。"
    ],
    "example": {
      "title": "换算采样率",
      "question": "每0.5 ms采样一次，采样率及序号200对应的时刻是多少？",
      "hints": [
        "先把毫秒换为秒。"
      ],
      "steps": [
        "T=0.0005 s，f_s=2000 Hz。",
        "t=200T=0.1 s。"
      ],
      "answer": "2000 Hz；0.1 s。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "采样和量化分别限制什么？",
      "options": [
        "时间与幅值",
        "幅值与时间",
        "都只限制时间",
        "都只限制幅值"
      ],
      "correct": 0,
      "explanation": "采样选时间位置，量化把幅值映射到离散等级。"
    }
  },
  {
    "id": "random-basics",
    "chapter": 2,
    "title": "随机信号、相关与功率谱",
    "english": "Discrete-Time Random Signals",
    "book": 64,
    "slides": [],
    "intro": "用统计量描述一族可能的波形。",
    "concept": [
      "随机过程是一族可能序列；一次记录只是一个实现。固定时刻的值是随机变量，均值、方差及相关描述其统计性质。",
      "宽平稳要求均值不变，自相关只依赖时间差。对实过程，r_x[k]=E{x[n]x[n−k]}；零均值时r_x[0]等于方差。",
      "功率谱是自相关的DTFT。稳定LTI滤波后的谱满足S_y=|H|²S_x，白噪声因此可被滤成具有不同频率强度的有色噪声。"
    ],
    "formulas": [
      "r_x[k]=E\\{x[n]x[n-k]\\}",
      "S_x(e^{j\\omega})=\\sum_k r_x[k]e^{-j\\omega k}",
      "S_y=|H|^2S_x"
    ],
    "steps": [
      "检查宽平稳假设。",
      "估计相关函数并变换到功率谱。",
      "用|H|²计算输出谱，通过积分检查输出功率。"
    ],
    "pitfalls": [
      "白噪声表示不同时刻不相关；独立是更强条件。"
    ],
    "example": {
      "title": "平均器减噪",
      "question": "零均值白噪声方差4，y[n]=(x[n]+x[n−1])/2的方差是多少？",
      "hints": [
        "交叉相关为0。"
      ],
      "steps": [
        "Var(y)=(4+4)/4=2。",
        "均值仍为0。"
      ],
      "answer": "方差2。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "方差σ²的零均值白噪声自相关为？",
      "options": [
        "σ²δ[k]",
        "σ²u[k]",
        "σ²k",
        "恒为0"
      ],
      "correct": 0,
      "explanation": "零延迟为方差，其他延迟为0。"
    }
  },
  {
    "id": "unilateral-z",
    "chapter": 3,
    "title": "单边z变换与初值",
    "english": "Unilateral z-Transform",
    "book": 135,
    "slides": [],
    "intro": "从n=0开始求解时，把初始状态明确保留下来。",
    "concept": [
      "单边z变换只对n≥0求和，适合带给定初始状态的递推。负时间数据不直接进入和式，却会在时移时形成附加项。",
      "y[n−1]的单边变换是\\(z^{−1}\\)Y_+(z)+y[−1]，后面的初值不能省略。",
      "求得的Y_+含零状态和零输入响应，其反变换描述n≥0；它不是直接等于系统函数乘输入。"
    ],
    "formulas": [
      "X_+(z)=\\sum_{n=0}^{\\infty}x[n]z^{-n}",
      "\\mathcal Z_+\\{y[n-1]\\}=z^{-1}Y_+(z)+y[-1]"
    ],
    "steps": [
      "对递推逐项作单边变换。",
      "加入时移产生的初值项，整理Y_+。",
      "按右边变换对反变换并检查首个样本。"
    ],
    "pitfalls": [
      "双边时移性质不能不加修改地用于单边变换。"
    ],
    "example": {
      "title": "保留初值",
      "question": "y[n]−0.5y[n−1]=0，y[−1]=2。求n≥0响应。",
      "hints": [
        "延迟项带初值2。"
      ],
      "steps": [
        "Y_+−0.5(\\(z^{−1}\\)Y_++2)=0。",
        "Y_+=1/(1−0.5\\(z^{−1}\\))。"
      ],
      "answer": "n≥0时y[n]=(0.5)ⁿ。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "y[n−1]的单边变换额外产生哪项？",
      "options": [
        "y[−1]",
        "y[1]",
        "0",
        "zY_+"
      ],
      "correct": 0,
      "explanation": "求和换下标后第一个样本是y[−1]。"
    }
  },
  {
    "id": "multirate-conversion",
    "chapter": 4,
    "title": "插值、抽取与有理变采样率",
    "english": "Sampling-Rate Conversion",
    "book": 175,
    "slides": [],
    "intro": "先控制频谱，再改变样本密度。",
    "concept": [
      "连续重建后用新周期采样可改变离散表示。数字方式以插零、低通、抽取完成等效操作。",
      "抽取M倍前应限制频带在|ω|<π/M，防止频谱副本叠加。插零L倍后频谱为X(\\(e^{jLω}\\))，需要插值低通消除镜像；插零本身没有生成真实新测量。",
      "有理转换L/M先插零L，再滤波，再抽取M。中间理想低通截止不超过min(π/L,π/M)，增益L。线性插值较简单，但频响并非理想sinc插值。"
    ],
    "formulas": [
      "f_{\\mathrm{out}}=\\frac{L}{M}f_{\\mathrm{in}}",
      "Y(e^{j\\omega})=\\frac1M\\sum_{r=0}^{M-1}X(e^{j(\\omega-2\\pi r)/M})"
    ],
    "steps": [
      "约分目标与原采样率比值。",
      "在中间采样率设置同时去镜像、防混叠的低通。",
      "完成变速后用真实Hz检查有效带宽。"
    ],
    "pitfalls": [
      "直接删样本之前必须检查带宽。"
    ],
    "example": {
      "title": "48 kHz变32 kHz",
      "question": "求L、M及理想中间截止。",
      "hints": [
        "32/48=2/3。"
      ],
      "steps": [
        "L=2、M=3，中间采样率96 kHz。",
        "截止min(π/2,π/3)=π/3，对应16 kHz，实际需留过渡带。"
      ],
      "answer": "先插零2倍、滤波、抽取3倍；截止π/3，增益2。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "插零后滤波主要为了什么？",
      "options": [
        "去镜像",
        "创造测量信息",
        "翻转时间",
        "使频谱全为0"
      ],
      "correct": 0,
      "explanation": "插零带来压缩复制的频谱镜像。"
    }
  },
  {
    "id": "polyphase",
    "chapter": 4,
    "title": "多相分解与滤波器组",
    "english": "Multirate and Polyphase Processing",
    "book": 194,
    "slides": [],
    "intro": "避免计算将被丢弃的输出和乘上零的输入。",
    "concept": [
      "多相分解按系数下标除以M的余数分成M组；重新交织可严格恢复原滤波器，不是近似。",
      "抽取结构只计算保留的样本，插值结构避开插入的零。换位恒等式依赖特定的z变量替换，不能任意把普通滤波器移过抽取器。",
      "多级变速把大因子拆成小因子，使部分滤波工作在低速率。分析滤波器组分频，综合滤波器组重组，必须检查支路混叠及整体失真。"
    ],
    "formulas": [
      "H(z)=\\sum_{r=0}^{M-1}z^{-r}E_r(z^M)",
      "E_r(z)=\\sum_k h[kM+r]z^{-k}"
    ],
    "steps": [
      "按下标余数分组。",
      "写出每一相E_r并重组成H验证。",
      "结合插值或抽取安排各相计算，检查交织顺序。"
    ],
    "pitfalls": [
      "各相顺序错误会导致输出时间位置错误。"
    ],
    "example": {
      "title": "两相分解",
      "question": "h={1,2,3,4}，M=2，求E₀与E₁。",
      "hints": [
        "偶下标和奇下标分开。"
      ],
      "steps": [
        "E₀=1+3\\(z^{−1}\\)。",
        "E₁=2+4\\(z^{−1}\\)。",
        "H=E₀(z²)+\\(z^{−1}\\)E₁(z²)。"
      ],
      "answer": "E₀=1+3\\(z^{−1}\\)；E₁=2+4\\(z^{−1}\\)。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "多相按什么分组？",
      "options": [
        "系数大小",
        "下标对M取余",
        "频率正负",
        "幅值奇偶"
      ],
      "correct": 1,
      "explanation": "第r相包含h[kM+r]。"
    }
  },
  {
    "id": "conversion-quantization",
    "chapter": 4,
    "title": "量化、D/A与过采样",
    "english": "Quantization and Oversampling",
    "book": 205,
    "slides": [],
    "intro": "分清有限精度误差、保持器下垂及带内噪声。",
    "concept": [
      "舍入量化误差通常位于[−Δ/2,Δ/2]。不过载且误差近似均匀、不相关时，方差为Δ²/12；小幅周期信号未必满足这一模型。",
      "零阶保持让每个样本持续一个周期，频响带sinc形下垂及延迟，模拟重建滤波器还需抑制镜像。",
      "固定量化步长的白噪声近似下，过采样后低通抽取会减少带内噪声。反馈噪声整形可进一步把噪声推向高频，但必须检查稳定与过载。"
    ],
    "formulas": [
      "\\sigma_e^2=\\Delta^2/12",
      "H_0(j\\Omega)=Te^{-j\\Omega T/2}\\frac{\\sin(\\Omega T/2)}{\\Omega T/2}",
      "\\sigma_{\\mathrm{band}}^2\\approx\\frac{\\Delta^2}{12\\,\\mathrm{OSR}}"
    ],
    "steps": [
      "规定输入范围、量化步长和过载条件。",
      "建立适用的噪声模型。",
      "把噪声经过各后续滤波器计算带内功率。"
    ],
    "pitfalls": [
      "白噪声近似不是对所有量化输入的严格结论。"
    ],
    "example": {
      "title": "量化步长减半",
      "question": "Δ减半，模型下噪声方差变成多少？",
      "hints": [
        "方差与Δ²成正比。"
      ],
      "steps": [
        "(Δ/2)²/12=Δ²/48。"
      ],
      "answer": "原方差的1/4，约下降6.02 dB。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "一阶噪声整形1−\\(z^{−1}\\)在直流处为？",
      "options": [
        "0",
        "1",
        "2",
        "无穷大"
      ],
      "correct": 0,
      "explanation": "z=1时相减为0。"
    }
  },
  {
    "id": "structures-direct",
    "chapter": 6,
    "title": "直接型、级联与并联",
    "english": "System Structures",
    "book": 375,
    "slides": [],
    "intro": "相同系统函数可以有不同的运算与存储安排。",
    "concept": [
      "结构图用加法、常数乘法和单位延迟表达运算；延迟保存过去样本，节点方程可以把结构重新转成差分方程。",
      "直接I型分开保存输入、输出的延迟链；直接II型引入中间序列并共享延迟，通常减少存储。最少延迟不等于最小数值误差。",
      "级联来自因式分解，常采用一二阶节；并联来自部分分式。含反馈的结构需通过节点方程消去内部变量求整体函数。"
    ],
    "formulas": [
      "w[n]=x[n]-\\sum_{k=1}^{N}a_kw[n-k]",
      "y[n]=\\sum_{k=0}^{M}b_kw[n-k]"
    ],
    "steps": [
      "把分母常数归一化为1。",
      "用分母生成内部序列w，再用分子计算y。",
      "消去w验证Y/X与原函数一致。"
    ],
    "pitfalls": [
      "分母移项后的系数符号很容易写反。"
    ],
    "example": {
      "title": "写直接II型",
      "question": "H=(1+0.2\\(z^{−1}\\))/(1−0.5\\(z^{−1}\\))，求递推。",
      "hints": [
        "分母a₁=−0.5。"
      ],
      "steps": [
        "w[n]=x[n]+0.5w[n−1]。",
        "y[n]=w[n]+0.2w[n−1]。"
      ],
      "answer": "两式只需保存一个过去的w。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "直接II型内部递推由什么决定？",
      "options": [
        "分母",
        "仅分子",
        "输入频率",
        "输出幅值"
      ],
      "correct": 0,
      "explanation": "内部序列实现全极点的分母部分。"
    }
  },
  {
    "id": "structures-fir-lattice",
    "chapter": 6,
    "title": "转置、FIR与格型",
    "english": "Transposed and Lattice Structures",
    "book": 397,
    "slides": [],
    "intro": "保留传递函数的结构变化，会改变内部数值行为。",
    "concept": [
      "转置定理反转支路方向并交换输入输出，相应交换分支与求和位置，保留单输入单输出传递函数，但内部状态不必相同。",
      "FIR就是有限卷积。对称系数可先把成对的输入相加再共用一次乘法；反对称则相减，中间样本另行处理。",
      "格型由重复的前后向支路构成，反射系数逐级控制预测误差和模型多项式。它与普通二阶节级联不同，第11章用预测理论解释这些系数。"
    ],
    "formulas": [
      "y[n]=\\sum_{k=0}^{M}h[k]x[n-k]",
      "h[k]\\{x[n-k]+x[n-M+k]\\}"
    ],
    "steps": [
      "由节点方程确认结构。",
      "把对称位置配对，保留中间项。",
      "变换后用冲激响应确认输入输出关系。"
    ],
    "pitfalls": [
      "同一传递函数的不同结构可能有不同溢出和舍入噪声。"
    ],
    "example": {
      "title": "对称结构省乘法",
      "question": "h={1,2,3,2,1}，写配对形式。",
      "hints": [
        "首尾两两配对。"
      ],
      "steps": [
        "y=(x[n]+x[n−4])+2(x[n−1]+x[n−3])+3x[n−2]。"
      ],
      "answer": "五组系数项合并成三组常数乘法。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "配对省乘法要求什么？",
      "options": [
        "输入对称",
        "系数对称或反对称",
        "输出为0",
        "采样率为偶数"
      ],
      "correct": 1,
      "explanation": "对称系数满足h[k]=h[M−k]，可先相加再共用乘法；反对称系数满足h[k]=−h[M−k]，可先相减再共用乘法。"
    }
  },
  {
    "id": "finite-precision",
    "chapter": 6,
    "title": "字长、噪声与极限环",
    "english": "Finite-Precision Effects",
    "book": 415,
    "slides": [],
    "intro": "理想极点稳定，还不足以保证有限精度的实际输出正常。",
    "concept": [
      "系数量化移动零极点并改变频响，高阶直接型有时特别敏感。二阶节、合理排序与缩放常能改善表现；对称FIR需成对量化以保留相位性质。",
      "舍入误差在适用条件下可看作内部噪声源，经各自到输出的传递函数传播。固定点数要检查溢出，浮点误差通常更接近与幅度相关的相对误差。",
      "反馈加量化使系统非线性，零输入后可能停在非零状态或重复循环，称为极限环。白噪声模型不能准确描述这一现象。"
    ],
    "formulas": [
      "\\sigma_{y,e}^2\\approx\\sigma_e^2\\sum_n|g[n]|^2",
      "y[n]=Q\\{ay[n-1]+x[n]\\}"
    ],
    "steps": [
      "分别列出系数、运算舍入与溢出。",
      "检查量化后的真实极点和内部状态范围。",
      "输入结束后继续零输入测试残余振荡。"
    ],
    "pitfalls": [
      "不能只用未量化的设计极点判断实现稳定性。"
    ],
    "example": {
      "title": "不消失的零输入响应",
      "question": "Q为最近整数舍入，a=0.75，x=0，y[−1]=1。求后续。",
      "hints": [
        "Q(0.75)=1。"
      ],
      "steps": [
        "y[0]=1。",
        "以后每次仍为Q(0.75)=1。"
      ],
      "answer": "输出一直为1，形成非零定点。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "量化反馈系统一定线性吗？",
      "options": [
        "一定",
        "不一定",
        "输入为0就线性",
        "与量化无关"
      ],
      "correct": 1,
      "explanation": "舍入不满足一般叠加。"
    }
  },
  {
    "id": "iir-design",
    "chapter": 7,
    "title": "IIR指标、原型与映射",
    "english": "IIR Filter Design",
    "book": 493,
    "slides": [],
    "intro": "从通阻带指标出发，选原型并验证数字域结果。",
    "concept": [
      "指标包括通带边缘、阻带边缘、允许波动和阻带衰减。Butterworth偏重平坦，Chebyshev与椭圆型通过纹波换取更陡过渡。",
      "冲激响应不变法可能混叠；双线性变换把左半s平面映入单位圆，不产生同样的复制，但频率关系非线性。",
      "关键数字边缘需先预畸变，再设计连续原型。低通还可作频率变换得到高通、带通或带阻；最终必须回数字域验收。"
    ],
    "formulas": [
      "s=\\frac2T\\frac{1-z^{-1}}{1+z^{-1}}",
      "\\Omega=\\frac2T\\tan(\\omega/2)"
    ],
    "steps": [
      "规定通阻带与误差。",
      "预畸变边缘并选择原型阶数。",
      "映射后检查频响、极点及实现结构。"
    ],
    "pitfalls": [
      "模拟与数字频率不是简单线性缩放。"
    ],
    "example": {
      "title": "预畸变边缘",
      "question": "T=1，数字截止π/2，模拟截止是多少？",
      "hints": [
        "tan(π/4)=1。"
      ],
      "steps": [
        "Ω_c=2tan(π/4)=2。"
      ],
      "answer": "Ω_c=2。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "双线性变换引入什么？",
      "options": [
        "频率非线性扭曲",
        "必然频谱复制混叠",
        "频率全不变",
        "必然不稳定"
      ],
      "correct": 0,
      "explanation": "频率映射是非线性的一一对应。"
    }
  },
  {
    "id": "fir-window-design",
    "chapter": 7,
    "title": "窗函数与Kaiser设计",
    "english": "Window-Based FIR Design",
    "book": 533,
    "slides": [],
    "intro": "有限截断把理想边缘变成过渡带与纹波。",
    "concept": [
      "窗函数法先求理想h_d，再乘有限窗w。频域因此发生卷积，理想陡边缘被展宽。",
      "主瓣宽度影响过渡带，旁瓣影响阻带抑制。加长同类窗通常缩窄过渡；更强平滑降低旁瓣却常展宽主瓣。",
      "对称窗与以M/2为中心的理想响应保留线性相位。Kaiser的β调节折中，长度控制尺度；低通、高通、带通和微分器还须检查类型与端点约束。"
    ],
    "formulas": [
      "h[n]=h_d[n]w[n]",
      "h_d[n]=\\frac{\\sin(\\omega_c(n-M/2))}{\\pi(n-M/2)}"
    ],
    "steps": [
      "确定理想频响及延迟。",
      "处理中心极限后选窗与长度。",
      "计算实际通阻带极值，按指标调整。"
    ],
    "pitfalls": [
      "截断后已不是理想砖墙低通。"
    ],
    "example": {
      "title": "三点低通",
      "question": "ω_c=π/2、M=2，使用矩形窗，求系数。",
      "hints": [
        "中心在n=1。"
      ],
      "steps": [
        "首尾均为1/π。",
        "中心极限为1/2。"
      ],
      "answer": "h={1/π,1/2,1/π}；未经额外归一化时直流增益为1/2+2/π。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "加长同类窗通常首先改善什么？",
      "options": [
        "缩窄过渡带",
        "消除全部纹波",
        "消除延迟",
        "使系统无限长"
      ],
      "correct": 0,
      "explanation": "窗谱主瓣一般随长度增加变窄。"
    }
  },
  {
    "id": "equiripple-design",
    "chapter": 7,
    "title": "等波纹与设计取舍",
    "english": "Optimum FIR Approximation",
    "book": 554,
    "slides": [],
    "intro": "最小化指定频带内最大的加权误差。",
    "concept": [
      "等波纹设计最小化max|W(D−A)|，与最小均方误差不同。过渡带通常不参与逼近约束。",
      "线性相位FIR可写成余弦逼近问题，交错定理描述最优误差极值的交替结构，Parks–McClellan迭代寻找这些极值。",
      "频带权重决定误差分配。方法还可补偿零阶保持或设计插值滤波器。FIR容易保持线性相位，IIR常用较少系数，但需另顾相位、稳定和有限精度。"
    ],
    "formulas": [
      "E(\\omega)=W(\\omega)[D(\\omega)-A(\\omega)]",
      "\\min_A\\max_{\\omega\\in\\mathcal F}|E(\\omega)|"
    ],
    "steps": [
      "选FIR类型、阶数和频带。",
      "规定目标与权重，求极小极大解。",
      "回到实际系数检查纹波、端点和延迟。"
    ],
    "pitfalls": [
      "平均误差小不保证最坏频率处误差小。"
    ],
    "example": {
      "title": "权重分配",
      "question": "通带权重1、阻带10，加权极值相等时原始误差比例为多少？",
      "hints": [
        "令δ_p=10δ_s。"
      ],
      "steps": [
        "阻带处罚重十倍，所以未加权误差小十倍。"
      ],
      "answer": "δ_p/δ_s=10。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "等波纹的典型目标是什么？",
      "options": [
        "最小最大加权误差",
        "最小系数和",
        "零延迟",
        "所有频率零误差"
      ],
      "correct": 0,
      "explanation": "目标是加权极小极大逼近。"
    }
  },
  {
    "id": "dft-dfs",
    "chapter": 8,
    "title": "DFS、DFT与频谱采样",
    "english": "Discrete Fourier Series and DFT",
    "book": 624,
    "slides": [],
    "intro": "有限变换背后有一个周期延拓。",
    "concept": [
      "N周期序列可由N个不同复指数谐波表示；DFS系数也以N为周期，因此一周期足够。",
      "DFT既是有限序列DTFT在2πk/N处的采样，也是其周期延拓的DFS系数。频域采样对应时域周期复制，复制重叠会产生时域混叠。",
      "实序列有共轭对称X[N−k]=X*[k]；循环移位产生线性相位；对偶性来自正逆变换相似结构。"
    ],
    "formulas": [
      "X[k]=\\sum_{n=0}^{N-1}x[n]e^{-j2\\pi kn/N}",
      "x[n]=\\frac1N\\sum_{k=0}^{N-1}X[k]e^{j2\\pi kn/N}"
    ],
    "steps": [
      "明确N与数据下标。",
      "向N个正交复指数投影。",
      "逆变换检查1/N尺度，并区分原有限序列与周期延拓。"
    ],
    "pitfalls": [
      "频率栅格不是信号只能存在的频率。"
    ],
    "example": {
      "title": "四点常数",
      "question": "x={1,1,1,1}，求DFT。",
      "hints": [
        "只含直流。"
      ],
      "steps": [
        "X[0]=4。",
        "其他k的复指数一周期求和为0。"
      ],
      "answer": "X={4,0,0,0}。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "N点DFT频率间隔是多少？",
      "options": [
        "2π/N",
        "π/N²",
        "Nπ",
        "1/N rad/s"
      ],
      "correct": 0,
      "explanation": "一个2π周期分成N份。"
    }
  },
  {
    "id": "dft-convolution",
    "chapter": 8,
    "title": "循环卷积与分块滤波",
    "english": "Circular and Linear Convolution",
    "book": 654,
    "slides": [],
    "intro": "补零长度决定DFT相乘能否得到线性卷积。",
    "concept": [
      "N点循环卷积将下标按模N折回，线性卷积尾部可能绕回开头叠加。",
      "长度L与M的序列线性卷积最多L+M−1长。两者补零到N≥L+M−1后，循环卷积与线性结果一致。",
      "重叠相加对输入分块、补零卷积后叠加尾部；重叠保留使用M−1个输入重叠样本，并丢弃各块受循环混叠污染的开头。"
    ],
    "formulas": [
      "y_N[n]=\\sum_{k=0}^{N-1}x[k]h[(n-k)\\bmod N]",
      "N\\ge L+M-1"
    ],
    "steps": [
      "先算线性输出长度。",
      "补零、DFT逐点相乘、逆变换。",
      "分块时检查重叠区、最后补零与丢弃范围。"
    ],
    "pitfalls": [
      "更长DFT避免循环折返，不改变真实卷积定义。"
    ],
    "example": {
      "title": "看循环折返",
      "question": "x={1,2}，h={1,1}，比较线性与2点循环卷积。",
      "hints": [
        "线性尾部按模2折回。"
      ],
      "steps": [
        "线性为{1,3,2}。",
        "尾部2加到开头1，得到{3,3}。"
      ],
      "answer": "线性{1,3,2}；2点循环{3,3}。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "长度5和4至少需要多大DFT实现线性卷积？",
      "options": [
        "5",
        "7",
        "8",
        "20"
      ],
      "correct": 2,
      "explanation": "5+4−1=8。"
    }
  },
  {
    "id": "dct",
    "chapter": 8,
    "title": "DCT与能量集中",
    "english": "Discrete Cosine Transform",
    "book": 673,
    "slides": [],
    "intro": "利用偶对称延拓，以实余弦表示有限数据。",
    "concept": [
      "DCT来自不同边界的偶延拓。DCT-I围绕端点，DCT-II围绕半样本位置，边界与归一化不能混用。",
      "这里使用教材也给出的正交DCT-II，直流项缩放不同于其他项，从而保持平方和能量。",
      "平滑、相邻样本相关的数据常集中于少量低频系数，适合压缩；对任意数据并不保证这一点。"
    ],
    "formulas": [
      "C[k]=\\alpha_k\\sum_{n=0}^{N-1}x[n]\\cos\\frac{\\pi k(n+1/2)}N",
      "\\alpha_0=1/\\sqrt N,\\quad\\alpha_k=\\sqrt{2/N}\\ (k>0)"
    ],
    "steps": [
      "确定类型及归一化。",
      "计算余弦投影并比较能量分布。",
      "舍弃系数后逆变换，用误差衡量压缩代价。"
    ],
    "pitfalls": [
      "DCT-II不是简单取普通DFT的实部。"
    ],
    "example": {
      "title": "两点常数DCT",
      "question": "x={1,1}，求正交DCT-II。",
      "hints": [
        "N=2。"
      ],
      "steps": [
        "C[0]=2/√2=√2。",
        "C[1]=cos(π/4)+cos(3π/4)=0。"
      ],
      "answer": "{√2,0}，能量2全部在直流。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "正交归一化DCT保持什么？",
      "options": [
        "平方和能量",
        "每个样本值",
        "所有系数为正",
        "最大幅值"
      ],
      "correct": 0,
      "explanation": "正交变换保持欧氏范数。"
    }
  },
  {
    "id": "fft-dit",
    "chapter": 9,
    "title": "按时间抽取的FFT",
    "english": "Decimation-in-Time FFT",
    "book": 718,
    "slides": [],
    "intro": "把大DFT拆成小DFT，重复使用已经算好的结果。",
    "concept": [
      "直接N点DFT约需N²级运算。基2FFT把偶下标与奇下标输入分别作N/2点DFT，再用旋转因子合并。FFT是DFT的算法，不是另一种变换。",
      "每对输出共享E[k]和W_N^kO[k]，一加一减形成蝶形。N为2的幂时不断递归，运算量降到N log₂N量级。",
      "原位计算节省存储，但数据排列需要管理；某些常见结构的输入或输出呈位反转顺序，必须与具体流程一致。"
    ],
    "formulas": [
      "X[k]=E[k]+W_N^kO[k]",
      "X[k+N/2]=E[k]-W_N^kO[k]",
      "W_N=e^{-j2\\pi/N}"
    ],
    "steps": [
      "把求和拆成n=2r与n=2r+1。",
      "识别两个N/2点DFT并提出W_N^k。",
      "利用\\(W_N^{k+N/2}\\)=−W_N^k合成后一半输出。"
    ],
    "pitfalls": [
      "FFT不自动改善数据的真实频率分辨能力。"
    ],
    "example": {
      "title": "两点蝶形",
      "question": "x={3,1}，求2点DFT。",
      "hints": [
        "旋转因子只有1。"
      ],
      "steps": [
        "X[0]=3+1=4。",
        "X[1]=3−1=2。"
      ],
      "answer": "X={4,2}。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "FFT与DFT的关系是？",
      "options": [
        "FFT是计算DFT的算法",
        "FFT改变频率定义",
        "FFT必然丢失一半数据",
        "二者毫无关系"
      ],
      "correct": 0,
      "explanation": "计算结果相同，运算组织不同。"
    }
  },
  {
    "id": "fft-dif-general",
    "chapter": 9,
    "title": "按频率抽取与一般长度",
    "english": "DIF and General FFT Algorithms",
    "book": 737,
    "slides": [],
    "intro": "不是只有2的幂才能做快速变换。",
    "concept": [
      "按频率抽取先将相隔N/2的输入相加或相减，分别得到偶频率和奇频率输出的子问题。与时间抽取相比，分解与旋转因子的放置顺序不同。",
      "复合长度可使用混合基算法，把N分解成多个小因子；优化FFT还需考虑存储访问、旋转因子生成和实际硬件，最少乘法不一定等于最快。",
      "Winograd等方法借助短卷积减少乘法。Chirp变换用nk=(n²+k²−(n−k)²)/2把DFT改写成带预后乘的卷积，可处理一般长度。"
    ],
    "formulas": [
      "nk=\\frac{n^2+k^2-(n-k)^2}{2}",
      "e^{-j2\\pi nk/N}=e^{-j\\pi n^2/N}e^{-j\\pi k^2/N}e^{j\\pi(n-k)^2/N}"
    ],
    "steps": [
      "按频率索引奇偶拆分输出，或将N分解为小因子。",
      "选择对应蝶形与排列方案。",
      "若用chirp卷积，正确补零并保留所需输出区间。"
    ],
    "pitfalls": [
      "必须检查最终输出顺序；位反转不是DFT定义的一部分。"
    ],
    "example": {
      "title": "位反转索引",
      "question": "8点基2结构中，3位二进制索引3的位反转是多少？",
      "hints": [
        "3写成011。"
      ],
      "steps": [
        "011反转为110。",
        "110对应十进制6。"
      ],
      "answer": "索引6。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "N=12能使用快速变换吗？",
      "options": [
        "不能",
        "能，可混合基分解",
        "只能丢弃4点",
        "必须先改成8点"
      ],
      "correct": 1,
      "explanation": "12可分为3×4等复合结构。"
    }
  },
  {
    "id": "goertzel-roundoff",
    "chapter": 9,
    "title": "少量频点与有限字长",
    "english": "Goertzel and Numerical Effects",
    "book": 719,
    "slides": [],
    "intro": "按要计算多少个频点选择算法，并检查尺度和误差。",
    "concept": [
      "只需要少量频点时，Goertzel用二阶递推逐样本积累，避免计算整组DFT。若需要全部频点，FFT通常更合适。",
      "对目标ω，递推s[n]=x[n]+2cosωs[n−1]−s[n−2]，初值为0。最后需按正确相位公式组合两个状态，不能直接把状态当作DFT值。",
      "FFT的加法可能增长幅度，定点实现常需分级缩放以防溢出；旋转因子量化和舍入会影响噪声。缩放改变输出尺度，必须与逆变换约定一致。"
    ],
    "formulas": [
      "s[n]=x[n]+2\\cos\\omega\\,s[n-1]-s[n-2]",
      "X(\\omega)=e^{-j\\omega(N-1)}\\{s[N-1]-e^{-j\\omega}s[N-2]\\}"
    ],
    "steps": [
      "确定只求少数频点还是完整频谱。",
      "Goertzel状态从0递推N次。",
      "用末状态组合，并用直接求和核对相位与幅值。"
    ],
    "pitfalls": [
      "不同代码的最终相位约定可能不同，幅度相同不代表复数结果相同。"
    ],
    "example": {
      "title": "只求直流",
      "question": "x={1,2,3}，目标ω=0。求结果并检查。",
      "hints": [
        "直流就是样本和。"
      ],
      "steps": [
        "递推系数2：s[0]=1，s[1]=4，s[2]=10。",
        "X=10−4=6，与1+2+3一致。"
      ],
      "answer": "X(0)=6。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "蝶形每级除以2共log₂N级，总尺度是多少？",
      "options": [
        "1/N",
        "1/2",
        "N",
        "不变"
      ],
      "correct": 0,
      "explanation": "(1/2)^{log₂N}=1/N。"
    }
  },
  {
    "id": "spectral-window",
    "chapter": 10,
    "title": "窗、泄漏与频率栅格",
    "english": "DFT Analysis of Sinusoids",
    "book": 793,
    "slides": [],
    "intro": "区分真实分辨能力、旁瓣泄漏与画图采样密度。",
    "concept": [
      "有限记录相当于原信号乘窗。频域卷积把单条谱线展成窗谱，非整周期截取常使能量分散到多个DFT频点。",
      "主瓣宽度影响分开邻近分量的能力；旁瓣影响弱分量是否被强分量遮盖。选择窗必须同时考虑两者。",
      "补零只让DTFT采样更密，有利于读峰值位置，但不增加原始观察时长。实余弦幅值估计还要考虑正负频率、窗的相干增益与端点频率。"
    ],
    "formulas": [
      "\\Delta f_{\\mathrm{grid}}=f_s/N_{\\mathrm{DFT}}",
      "T_{\\mathrm{obs}}=L/f_s",
      "X_w(e^{j\\omega})=\\frac1{2\\pi}(X*_{\\mathrm{periodic}}W)(\\omega)"
    ],
    "steps": [
      "记录采样率、有效样本L和窗。",
      "选DFT长度，区分L与补零后长度。",
      "校正窗增益，检查邻近分量是否真正可分辨。"
    ],
    "pitfalls": [
      "更细的频率栅格不等于更高真实分辨率。"
    ],
    "example": {
      "title": "补零改变了什么",
      "question": "1000 Hz采样、100个有效样本，补零到1000点。栅格间隔与观察时长是多少？",
      "hints": [
        "有效时长只由100个样本决定。"
      ],
      "steps": [
        "栅格间隔1000/1000=1 Hz。",
        "观察时长100/1000=0.1 s。"
      ],
      "answer": "1 Hz栅格，仍只有0.1 s的观测信息。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "要增加实际观察信息，应该？",
      "options": [
        "多采有效样本",
        "只补更多零",
        "换显示颜色",
        "重复同一数据"
      ],
      "correct": 0,
      "explanation": "增加真实观测时长才能增加独立的时间信息。"
    }
  },
  {
    "id": "stft",
    "chapter": 10,
    "title": "短时傅里叶变换与重建",
    "english": "Time-Dependent Fourier Transform",
    "book": 811,
    "slides": [],
    "intro": "沿时间移动窗，观察频率成分怎样改变。",
    "concept": [
      "STFT对每一小段加窗并计算频谱，适合语音和雷达等非平稳信号。长窗频率分辨较好但时间定位较粗，短窗则相反。",
      "每个频率通道也可理解成调制滤波器组。时间步长和频率采样密度会影响冗余与可重建性。",
      "逆变换后的各帧重叠相加，需要窗的叠加权重处处非零并正确归一化。若分析与综合都加窗，应使用两窗乘积的叠加作为权重。"
    ],
    "formulas": [
      "X_m[k]=\\sum_n x[n]w[n-mR]e^{-j2\\pi kn/N}",
      "x[n]=\\frac{\\sum_m x[n]w[n-mR]v[n-mR]}{\\sum_m w[n-mR]v[n-mR]}"
    ],
    "steps": [
      "选窗长、步长R和DFT长度。",
      "逐帧分析，解释时间与频率坐标。",
      "逐帧逆变换、综合加窗、重叠相加并除以实际权重。"
    ],
    "pitfalls": [
      "直接把重叠帧相加而不检查权重，可能造成幅度起伏。"
    ],
    "example": {
      "title": "重叠权重",
      "question": "两个矩形窗帧在某样本处重叠，各自都重建出数值3。直接相加与归一化结果分别是多少？",
      "hints": [
        "权重和是2。"
      ],
      "steps": [
        "直接和为6。",
        "除以2后恢复为3。"
      ],
      "answer": "直接6，正确归一化3。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "长分析窗通常带来什么？",
      "options": [
        "较好频率分辨、较差时间定位",
        "二者同时无限提高",
        "无法重建",
        "必定没有泄漏"
      ],
      "correct": 0,
      "explanation": "窗长度体现时频折中。"
    }
  },
  {
    "id": "periodogram",
    "chapter": 10,
    "title": "周期图、平均与相关估计",
    "english": "Power Spectrum Estimation",
    "book": 836,
    "slides": [],
    "intro": "随机信号的频谱估计必须同时考虑偏差和波动。",
    "concept": [
      "矩形窗周期图为|DFT|²/L，对一个完整频率周期积分得到样本平均功率。它是随机估计量，不是精确的真实功率谱。",
      "增加单段长度可改善频率细节，但普通周期图的方差一般不随长度自动趋于0。分段平均可降低波动，代价是每段较短、频率分辨下降。",
      "相关估计与谱估计通过傅里叶关系联系。窗、归一化、均值去除、单双边谱和采样率单位都影响数值；估计量化噪声或语音谱时需明确这些选择。"
    ],
    "formulas": [
      "\\widehat S_x(e^{j\\omega})=\\frac1L\\left|\\sum_{n=0}^{L-1}x[n]e^{-j\\omega n}\\right|^2",
      "\\widehat S_{\\mathrm{avg}}=\\frac1K\\sum_{r=1}^{K}\\widehat S_r"
    ],
    "steps": [
      "判断平稳近似是否适用于分析段。",
      "选择段长、窗和重叠，统一功率归一化。",
      "平均各段周期图，积分检查功率与时域一致。"
    ],
    "pitfalls": [
      "重叠段通常并非独立，方差下降不能简单当成独立K段的精确结果。"
    ],
    "example": {
      "title": "DFT功率归一化",
      "question": "x={1,−1}，L=2。求两点周期图值。",
      "hints": [
        "DFT为{0,2}。"
      ],
      "steps": [
        "模平方为{0,4}。",
        "除以L=2得到{0,2}，两频点平均为1。"
      ],
      "answer": "周期图{0,2}；平均功率1，与时域平方平均一致。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "分段平均主要改善什么？",
      "options": [
        "降低估计波动",
        "无限提高分辨率",
        "消除一切偏差",
        "不需要归一化"
      ],
      "correct": 0,
      "explanation": "平均通常降低方差，但有分辨率与相关性代价。"
    }
  },
  {
    "id": "linear-prediction",
    "chapter": 11,
    "title": "全极点模型与线性预测",
    "english": "All-Pole Modeling and Prediction",
    "book": 891,
    "slides": [],
    "intro": "用过去样本预测现在，再用预测误差驱动模型。",
    "concept": [
      "p阶线性预测写成x̂[n]=∑a_kx[n−k]，误差e[n]=x[n]−x̂[n]。选择a使误差平方和或均方值最小。",
      "逆滤波器A(z)=1−∑\\(a_kz^{−k}\\)把信号变为误差；全极点合成模型H=G/A将激励重新变为信号。确定性有限能量和随机过程使用不同平均方式，但可形成相似正规方程。",
      "最优误差与用于预测的过去样本正交。随机模型可据误差功率确定增益G，并匹配一定数量的相关值。"
    ],
    "formulas": [
      "e[n]=x[n]-\\sum_{k=1}^{p}a_kx[n-k]",
      "E\\{e[n]x[n-i]\\}=0,\\quad i=1,\\ldots,p",
      "H(z)=\\frac{G}{1-\\sum_k a_kz^{-k}}"
    ],
    "steps": [
      "规定模型阶数与误差平均区间。",
      "展开平方误差，对每个a求导设为0。",
      "解正规方程，再计算残差功率和模型稳定性。"
    ],
    "pitfalls": [
      "预测系数与分母系数存在符号关系，比较软件时需统一。"
    ],
    "example": {
      "title": "一阶预测",
      "question": "实宽平稳信号r[0]=2、r[1]=1，求一阶预测系数与最小误差。",
      "hints": [
        "a=r[1]/r[0]。"
      ],
      "steps": [
        "a=1/2。",
        "E_min=r[0]−a r[1]=2−0.5=1.5。"
      ],
      "answer": "a=0.5，最小误差1.5。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "最优误差与预测用的过去样本有何关系？",
      "options": [
        "正交",
        "必相等",
        "必独立",
        "必同号"
      ],
      "correct": 0,
      "explanation": "正规方程给出零相关；不必推出独立。"
    }
  },
  {
    "id": "model-estimation",
    "chapter": 11,
    "title": "相关法、协方差法与模型阶数",
    "english": "Correlation Estimation and Model Order",
    "book": 900,
    "slides": [],
    "intro": "模型更复杂不一定更可信，要检查边界假设与残差。",
    "concept": [
      "自相关法将有限数据窗外视为0，得到Toeplitz形式的相关矩阵；在通常非退化条件下可构成稳定的全极点模型。",
      "协方差法仅在选定有效区间累积预测误差，避免某些补零边界效应，但矩阵一般不再Toeplitz，稳定性也不能同样保证。",
      "阶数太低会遗漏结构，太高会追逐噪声、产生尖峰或伪极点。全极点谱适于共振峰表示，但不能凭漂亮峰形证明物理成分真实存在。"
    ],
    "formulas": [
      "\\mathbf R\\mathbf a=\\mathbf r",
      "S_{\\mathrm{model}}(e^{j\\omega})=\\frac{\\sigma_e^2}{|1-\\sum_k a_ke^{-j\\omega k}|^2}"
    ],
    "steps": [
      "选定数据边界处理及误差区间。",
      "估计相关矩阵并检查数值条件。",
      "比较多个阶数的残差、稳定性和独立数据表现。"
    ],
    "pitfalls": [
      "模型谱的高分辨外观依赖模型假设，不能自动替代数据证据。"
    ],
    "example": {
      "title": "一个AR谱",
      "question": "a=0.5、激励方差1，求模型在0与π处的谱值。",
      "hints": [
        "分母分别为|1−0.5|²与|1+0.5|²。"
      ],
      "steps": [
        "S(0)=1/0.25=4。",
        "S(π)=1/2.25=4/9。"
      ],
      "answer": "直流4，π处4/9，体现低频共振增强。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "协方差法的矩阵一般一定Toeplitz吗？",
      "options": [
        "一定",
        "不一定",
        "必为零矩阵",
        "只看采样率"
      ],
      "correct": 1,
      "explanation": "有限区间导致各元素的边界处理不同。"
    }
  },
  {
    "id": "levinson-lattice",
    "chapter": 11,
    "title": "Levinson递推与预测格型",
    "english": "Levinson–Durbin and Lattice Filters",
    "book": 915,
    "slides": [],
    "intro": "从低阶预测逐级增加一阶，复用已有解。",
    "concept": [
      "自相关正规方程的Toeplitz结构可用Levinson–Durbin递推高效求解，不必每次重算整个矩阵逆。",
      "每增加一阶，引入一个反射系数并更新前后向预测误差。误差功率按E_m=E_{m−1}(1−|k_m|²)变化；在正定条件下|k_m|<1。",
      "格型将这一逐阶关系变成模块化网络；既可实现预测误差滤波，也可实现全极点合成。不同符号约定会改变k的符号，不能只抄公式名称。"
    ],
    "formulas": [
      "E_m=E_{m-1}(1-|k_m|^2)",
      "k_1=r[1]/r[0]"
    ],
    "steps": [
      "从0阶误差E₀=r[0]开始。",
      "用新相关值与旧系数计算下一反射系数。",
      "更新系数和误差功率，检查正定与稳定条件。"
    ],
    "pitfalls": [
      "退化或病态数据可能使递推失效，需要检查矩阵而非盲目继续。"
    ],
    "example": {
      "title": "第一步递推",
      "question": "r[0]=4、r[1]=2。求k₁与E₁。",
      "hints": [
        "E₀=4。"
      ],
      "steps": [
        "k₁=2/4=0.5。",
        "E₁=4(1−0.25)=3。"
      ],
      "answer": "k₁=0.5，E₁=3。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "若|k_m|<1，误差功率递推如何？",
      "options": [
        "不增加",
        "必增加",
        "必为负",
        "与k无关"
      ],
      "correct": 0,
      "explanation": "乘数1−|k_m|²在0至1之间。"
    }
  },
  {
    "id": "hilbert-sufficiency",
    "chapter": 12,
    "title": "因果性与实虚部充分性",
    "english": "Real- and Imaginary-Part Sufficiency",
    "book": 944,
    "slides": [],
    "intro": "附加时间支撑条件后，频谱的一部分可以决定另一部分。",
    "concept": [
      "对实因果序列，负时间为0，其偶部在n>0等于原序列的一半。频谱实部是偶部的变换，因此知道完整实部可恢复该因果序列。",
      "频谱虚部对应奇部，奇部在n=0永远为0，所以只知虚部还缺少x[0]。这说明“实部或虚部都足够”需要说明缺失的常数。",
      "周期Hilbert积分用cot核联系频谱实虚部，奇点采用柯西主值。有限DFT的对应结论还要求指定长度、零支撑和特殊端点，不能对任意有限数据直接套用。"
    ],
    "formulas": [
      "x[n]=2x_e[n]\\ (n>0),\\quad x[0]=x_e[0]",
      "X_I(\\omega)=-\\frac1{2\\pi}\\operatorname{PV}\\int_{-\\pi}^{\\pi}X_R(\\theta)\\cot\\frac{\\omega-\\theta}{2}\\,d\\theta"
    ],
    "steps": [
      "用因果条件把原序列与偶奇部关联。",
      "由已知实部逆变换得到偶部。",
      "保留中心样本、正时间加倍、负时间置零。"
    ],
    "pitfalls": [
      "这里的因果约束是关键；一般双边序列不能仅凭实部恢复。"
    ],
    "example": {
      "title": "由实部恢复",
      "question": "已知实因果序列的频谱实部为1+0.5cosω，求x。",
      "hints": [
        "cosω对应两个对称冲激各一半。"
      ],
      "steps": [
        "偶部为δ[n]+0.25δ[n−1]+0.25δ[n+1]。",
        "正时间加倍、负时间置零。"
      ],
      "answer": "x[n]=δ[n]+0.5δ[n−1]。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "只知因果实序列频谱虚部，还缺少什么？",
      "options": [
        "x[0]",
        "全部负时间",
        "采样率一定缺失",
        "没有任何缺失"
      ],
      "correct": 0,
      "explanation": "奇部在原点为0，无法提供中心样本。"
    }
  },
  {
    "id": "hilbert-minimum-phase",
    "chapter": 12,
    "title": "对数幅度与相位关系",
    "english": "Magnitude–Phase Relations",
    "book": 955,
    "slides": [],
    "intro": "只有附加最小相位等约束，幅度才能约束相位。",
    "concept": [
      "一般因果稳定系统仍可具有相同幅度、不同相位，因为可以乘全通因子。实虚部Hilbert关系不能直接推出普通幅相唯一关系。",
      "考虑log X=log|X|+jφ。若其逆变换即复倒谱因果，则对数谱满足相应实虚部关系，可以由对数幅度得到相位，需固定常数相位与延迟约定。",
      "最小相位提供这种因果复倒谱条件。反过来由相位恢复幅度时还缺一个增益常数；单位圆零点会造成对数奇异，需要单独处理。"
    ],
    "formulas": [
      "\\log X(e^{j\\omega})=\\log|X(e^{j\\omega})|+j\\phi(\\omega)"
    ],
    "steps": [
      "先验证最小相位及对数存在条件。",
      "选择连续相位与常数约定。",
      "把Hilbert关系用于对数谱，而不是直接用于|X|。"
    ],
    "pitfalls": [
      "不能从幅度任意恢复原系统的全通部分。"
    ],
    "example": {
      "title": "相同幅度的反例",
      "question": "H₁=1，H₂=\\(z^{−1}\\)，比较幅度与相位。",
      "hints": [
        "延迟项在单位圆上模为1。"
      ],
      "steps": [
        "两者幅度恒1。",
        "H₁相位0，H₂相位−ω。"
      ],
      "answer": "幅度相同，相位不同；H₂的逆需要超前，不是因果逆。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "对满足对数谱条件的最小相位系统，由相位恢复对数幅度还缺什么？",
      "options": [
        "增益常数",
        "所有频率坐标",
        "全部零点模都未知且不可约束",
        "没有缺失"
      ],
      "correct": 0,
      "explanation": "对数幅度的加性常数对应幅度乘性增益。"
    }
  },
  {
    "id": "analytic-signal",
    "chapter": 12,
    "title": "Hilbert变换与解析信号",
    "english": "Analytic and Bandpass Signals",
    "book": 956,
    "slides": [],
    "intro": "构造只有正频率的复信号，分离包络与载波。",
    "concept": [
      "理想Hilbert变换对正频率乘−j，对负频率乘+j，幅度不变而移相90°。它的理想冲激响应非因果且无限长，实际用延迟FIR近似。",
      "实信号x与其Hilbert变换组成x_a=x+jx_H：正频率加倍，负频率抵消，直流及Nyquist端点需单独处理。",
      "窄带信号可用复包络乘载波表示，方便调制与带通采样。包络、瞬时相位的物理解释需要适当单分量或窄带条件，不是任意信号都能直接套用。"
    ],
    "formulas": [
      "H_H(e^{j\\omega})=\\begin{cases}-j,&0<\\omega<\\pi,\\\\j,&-\\pi<\\omega<0,\\end{cases}",
      "x_a[n]=x[n]+jx_H[n]"
    ],
    "steps": [
      "将正负频率分开。",
      "对正频率移相−π/2、负频率移相+π/2。",
      "与原信号组合，检查负频率抵消。"
    ],
    "pitfalls": [
      "实际Hilbert滤波支路的延迟必须与原信号支路对齐。"
    ],
    "example": {
      "title": "解析余弦",
      "question": "x[n]=cos(ω₀n)，0<ω₀<π。求理想Hilbert变换和解析信号。",
      "hints": [
        "cos与sin的复指数展开。"
      ],
      "steps": [
        "Hilbert输出为sin(ω₀n)。",
        "cos+j sin=\\(e^{jω₀n}\\)。"
      ],
      "answer": "x_H=sin(ω₀n)，x_a=\\(e^{jω₀n}\\)。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "解析信号主要消除了哪部分？",
      "options": [
        "负频率",
        "所有正频率",
        "直流一定消除",
        "全部相位"
      ],
      "correct": 0,
      "explanation": "组合使负频率相消，正频率加倍。"
    }
  },
  {
    "id": "cepstrum-definition",
    "chapter": 13,
    "title": "实倒谱、复倒谱与复对数",
    "english": "Cepstrum and Complex Logarithm",
    "book": 981,
    "slides": [],
    "intro": "先把卷积变乘法，再用对数把乘法变加法。",
    "concept": [
      "实倒谱是log|X|的逆DTFT，丢弃了相位。复倒谱是连续选择的复对数log X的逆DTFT，保留可恢复信息，但相位分支必须一致。",
      "若x=v*h，则在适当非零和对数分支条件下，复倒谱满足x̂=v̂+ĥ，因而可用线性方法分离卷积成分。",
      "倒谱下标仍以样本为单位，称为quefrency以区别原时间。名称中的“复”指复对数步骤，并不表示实信号的复倒谱一定有非零虚部。"
    ],
    "formulas": [
      "c_x[n]=\\mathcal F^{-1}\\{\\log|X|\\}",
      "\\widehat x[n]=\\mathcal F^{-1}\\{\\log|X|+j\\phi\\}",
      "\\widehat x=\\widehat v+\\widehat h"
    ],
    "steps": [
      "求频谱并检查零值。",
      "实倒谱取对数幅度；复倒谱还需一致展开相位。",
      "逆变换后解释峰的位置及卷积成分。"
    ],
    "pitfalls": [
      "不能直接把逐点主值复对数当成连续复对数。"
    ],
    "example": {
      "title": "纯增益的倒谱",
      "question": "x[n]=2δ[n]，求实倒谱。",
      "hints": [
        "频谱恒为2。"
      ],
      "steps": [
        "log|X|=log2为常数。",
        "常数频谱的逆变换为原点冲激。"
      ],
      "answer": "c_x[n]=(log2)δ[n]。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "实倒谱保留原相位吗？",
      "options": [
        "保留",
        "不保留",
        "只保留负频率相位",
        "等于群延迟"
      ],
      "correct": 1,
      "explanation": "它仅使用log|X|。"
    }
  },
  {
    "id": "cepstrum-computation",
    "chapter": 13,
    "title": "倒谱计算与最小相位恢复",
    "english": "Complex Cepstrum Computation",
    "book": 986,
    "slides": [],
    "intro": "从根、级数或DFT求倒谱，检查相位和循环混叠。",
    "concept": [
      "最小相位序列在适当增益与延迟约定下具有因果复倒谱；最大相位对应相反方向。指数与根因子可用log(1−q)=−∑q^m/m展开求系数。",
      "用DFT计算需相位展开并处理整体延迟；频域采样使倒谱周期复制，长度不足会混叠。对数导数、递推、根分解与指数加权是教材讨论的替代计算方式。",
      "实最小相位序列可从实倒谱恢复复倒谱：原点不变，正下标加倍，负下标置零，再变换、取指数、逆变换。有限数据需处理周期端点。"
    ],
    "formulas": [
      "-\\log(1-az^{-1})=\\sum_{m=1}^{\\infty}\\frac{a^m}{m}z^{-m},\\quad |a|<1",
      "\\widehat x[n]=c_x[n](2u[n]-\\delta[n])"
    ],
    "steps": [
      "确认零极点与所需分支。",
      "选择级数、根分解或足够长DFT计算。",
      "通过重建频谱与时域序列验证，不只看倒谱曲线。"
    ],
    "pitfalls": [
      "频谱接近0时对数非常敏感；任意加小常数会改变模型。"
    ],
    "example": {
      "title": "指数序列的复倒谱",
      "question": "x[n]=(0.5)ⁿu[n]，求复倒谱n=1,2的值。",
      "hints": [
        "log X=−log(1−0.5\\(z^{−1}\\))。"
      ],
      "steps": [
        "x̂[1]=0.5。",
        "x̂[2]=0.5²/2=0.125。"
      ],
      "answer": "0.5与0.125；负下标为0，原点为0。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "由实序列的非周期实倒谱恢复最小相位复倒谱时，正下标怎样处理？",
      "options": [
        "加倍",
        "全部置零",
        "取负",
        "完全不变"
      ],
      "correct": 0,
      "explanation": "实倒谱是相应因果复倒谱的偶部，所以正下标加倍、原点不变、负下标置零。若用偶数N点DFT的周期倒谱实现，n=N/2也保留不加倍；只将1≤n<N/2加倍，N/2<n<N置零。"
    }
  },
  {
    "id": "homomorphic",
    "chapter": 13,
    "title": "同态解卷积、回声与语音",
    "english": "Homomorphic Deconvolution",
    "book": 1002,
    "slides": [],
    "intro": "只有各成分在倒谱中可分离时，截取倒谱才有明确意义。",
    "concept": [
      "回声模型x[n]=v[n]+αv[n−n₀]等于v与δ[n]+αδ[n−n₀]卷积。对|α|<1，回声复倒谱在n₀的正整数倍处出现衰减系数。",
      "同态解卷积在倒谱域分离成分，再通过指数映射恢复。最小相位/全通、最小/最大相位分解利用不同结构；一般回声分离还要求源倒谱与回声峰不严重重叠。",
      "语音源—滤波器模型把激励周期与声道谱包络分开，低倒频常描述缓变包络，高倒频可显示基音周期。实际混叠、噪声、短窗和模型不匹配会影响可分性。"
    ],
    "formulas": [
      "\\log(1+\\alpha z^{-n_0})=\\sum_{m=1}^{\\infty}\\frac{(-1)^{m+1}\\alpha^m}{m}z^{-mn_0}",
      "x[n]=v[n]*(\\delta[n]+\\alpha\\delta[n-n_0])"
    ],
    "steps": [
      "写出卷积模型并检查幅值与延迟条件。",
      "求倒谱并寻找结构化峰。",
      "只在可分离假设成立时选择倒谱窗，重建后验证残差与波形。"
    ],
    "pitfalls": [
      "任意删去倒谱的一段并不保证消除回声；可能同时删掉源信号信息。"
    ],
    "example": {
      "title": "回声峰的系数",
      "question": "α=0.4，n₀=5。求回声复倒谱在n=5和10处的值。",
      "hints": [
        "使用m=1与m=2。"
      ],
      "steps": [
        "n=5：0.4。",
        "n=10：−0.4²/2=−0.08。"
      ],
      "answer": "0.4与−0.08。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "回声延迟n₀通常在倒谱哪里体现？",
      "options": [
        "n₀及其倍数",
        "只在直流",
        "任意位置均匀出现",
        "所有负频率"
      ],
      "correct": 0,
      "explanation": "对数级数形成\\(z^{−mn₀}\\)项。"
    }
  },
  {
    "id": "random-distribution",
    "chapter": "A",
    "title": "随机过程与概率描述",
    "english": "Random Processes and Distributions",
    "book": 1043,
    "slides": [],
    "intro": "先分清随机变量、实现和统计平均。",
    "concept": [
      "固定时间的x[n]是随机变量；固定一次试验、随n变化得到一条实现。联合分布描述不同时间样本之间的依赖。",
      "独立性要求联合分布可分解；不相关只要求中心化乘积的期望为0。一般情况下不相关不能推出独立。",
      "对函数g(x)求期望，需要按概率加权，而不是将g作用到均值上。连续变量用积分，离散变量用求和。"
    ],
    "formulas": [
      "E\\{g(X)\\}=\\int g(x)p_X(x)\\,dx",
      "\\operatorname{Var}(X)=E\\{X^2\\}-(EX)^2"
    ],
    "steps": [
      "列出随机变量可能值或概率密度。",
      "按概率求均值及二阶矩。",
      "区分方差、相关与独立要求。"
    ],
    "pitfalls": [
      "E{X²}通常不等于(EX)²。"
    ],
    "example": {
      "title": "两点随机变量",
      "question": "X等概率取−1和1，求均值与方差。",
      "hints": [
        "先求E{X²}。"
      ],
      "steps": [
        "均值(−1+1)/2=0。",
        "二阶矩1，方差1−0=1。"
      ],
      "answer": "均值0，方差1。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "不相关一般能推出独立吗？",
      "options": [
        "能",
        "不能",
        "只看均值为0就能",
        "总是同义"
      ],
      "correct": 1,
      "explanation": "独立约束整个联合分布，更强。"
    }
  },
  {
    "id": "random-stationarity",
    "chapter": "A",
    "title": "平稳、遍历与样本估计",
    "english": "Stationarity and Averages",
    "book": 1045,
    "slides": [],
    "intro": "何时能用一条长记录代替许多次试验？",
    "concept": [
      "严格平稳要求所有联合分布对时间平移不变；宽平稳只要求均值恒定和二阶相关依赖时间差。",
      "遍历性让适当时间平均与统计平均一致，需明确针对均值、相关等哪种统计量；平稳本身不自动保证遍历。",
      "有限样本均值和相关是随机估计量，具有偏差和方差。观察时间更长是否改善估计，要看相关结构及所采用的假设。"
    ],
    "formulas": [
      "\\widehat m=\\frac1L\\sum_{n=0}^{L-1}x[n]",
      "r_x[k]=E\\{x[n]x[n-k]\\}"
    ],
    "steps": [
      "提出适用的平稳或遍历假设。",
      "选择估计式及边界归一化。",
      "分析或实验评估偏差、波动和样本长度影响。"
    ],
    "pitfalls": [
      "把每条实现都恒定、但随机选常数的过程作为反例，可说明平稳不等于均值遍历。"
    ],
    "example": {
      "title": "平稳但不遍历的直觉",
      "question": "每次试验随机选A=±1且全时刻x[n]=A。长时间均值是什么？",
      "hints": [
        "同一条记录永远不变。"
      ],
      "steps": [
        "每条实现时间均值为A。",
        "统计均值为0，因此时间均值一般不等于统计均值。"
      ],
      "answer": "时间均值为±1，过程不具有该均值遍历性质。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "宽平稳自相关依赖什么？",
      "options": [
        "时间差",
        "两个时刻各自任意变化",
        "只能为0",
        "仅样本总数"
      ],
      "correct": 0,
      "explanation": "宽平稳使相关只依赖滞后。"
    }
  },
  {
    "id": "random-filtering",
    "chapter": "A",
    "title": "随机信号通过LTI系统",
    "english": "Filtering and Power Spectra",
    "book": 1049,
    "slides": [],
    "intro": "用相关与谱把噪声传播变成可计算问题。",
    "concept": [
      "宽平稳输入通过适当稳定LTI系统后，输出均值乘直流增益；输出谱乘幅度平方，相位不改变单路功率谱。",
      "输出平均功率是功率谱在一个频率周期上的积分。白噪声的输出方差可直接由冲激响应平方和求得。",
      "互相关与互谱保留输入输出间更多关系，不能把互谱都写成|H|²；共轭放在哪边取决于互相关定义。"
    ],
    "formulas": [
      "S_y(e^{j\\omega})=|H(e^{j\\omega})|^2S_x(e^{j\\omega})",
      "\\sigma_y^2=\\sigma_x^2\\sum_n|h[n]|^2\\quad\\text{(zero-mean white input)}"
    ],
    "steps": [
      "确认零均值、白噪声及稳定条件。",
      "选择频域积分或时域平方和。",
      "检查结果的功率单位与非负性。"
    ],
    "pitfalls": [
      "平均值不为0时，方差与总均方值要分开。"
    ],
    "example": {
      "title": "白噪声经一阶系统",
      "question": "方差1的零均值白噪声经过h[n]=(0.5)ⁿu[n]，输出方差是多少？",
      "hints": [
        "平方后公比为0.25。"
      ],
      "steps": [
        "∑|h|²=∑0.25ⁿ=1/(1−0.25)。"
      ],
      "answer": "4/3。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "输出功率谱由输入谱乘什么？",
      "options": [
        "|H|²",
        "H本身",
        "arg H",
        "1/H"
      ],
      "correct": 0,
      "explanation": "相关两边滤波带来H与H*相乘。"
    }
  },
  {
    "id": "butterworth",
    "chapter": "B",
    "title": "Butterworth低通原型",
    "english": "Butterworth Filters",
    "book": 1056,
    "slides": [],
    "intro": "用最大平坦性换取单调而平滑的幅度。",
    "concept": [
      "Butterworth低通在直流附近最大平坦，通带和阻带幅度单调，没有等波纹。阶数越大，过渡通常越陡。",
      "直流增益归一化为1时，幅度平方为1/[1+(Ω/Ω_c)^{2N}]，在Ω=Ω_c处幅度为1/√2，即相对直流约−3.01 dB。",
      "由幅度平方函数求稳定因子时，只选择左半平面的极点；不把对称的右半平面根也放进稳定传递函数。"
    ],
    "formulas": [
      "|H(j\\Omega)|^2=\\frac1{1+(\\Omega/\\Omega_c)^{2N}}"
    ],
    "steps": [
      "由通阻带指标确定阶数及截止。",
      "选左半平面极点组成稳定原型。",
      "映射到数字域后再次检查实际指标。"
    ],
    "pitfalls": [
      "截止点不是幅度1/2，而是功率下降到1/2。"
    ],
    "example": {
      "title": "二阶原型",
      "question": "N=2，求Ω=2Ω_c处幅度平方。",
      "hints": [
        "(2)^{2N}=16。"
      ],
      "steps": [
        "|H|²=1/(1+16)=1/17。"
      ],
      "answer": "1/17；幅度1/√17。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "直流增益归一化为1的Butterworth低通，在截止处幅度为？",
      "options": [
        "1/√2",
        "1/2",
        "1",
        "0"
      ],
      "correct": 0,
      "explanation": "幅度平方为1/2。"
    }
  },
  {
    "id": "chebyshev",
    "chapter": "B",
    "title": "Chebyshev两类原型",
    "english": "Chebyshev Filters",
    "book": 1058,
    "slides": [],
    "intro": "把误差均匀分布到一个频带，换取更快的过渡。",
    "concept": [
      "I型Chebyshev通带等波纹、阻带单调；II型通带单调、阻带等波纹。不要仅凭“Chebyshev”就假设纹波在通带。",
      "I型幅度平方为1/[1+ε²T_N²(Ω/Ω_c)]，Chebyshev多项式在|x|≤1内等幅振荡，因此通带误差在多个频率间分配。",
      "允许纹波能在相同要求下减少阶数，但相位与群延迟也需评估。不同原型的截止定义要与设计指标一致。"
    ],
    "formulas": [
      "|H_I(j\\Omega)|^2=\\frac1{1+\\epsilon^2T_N^2(\\Omega/\\Omega_c)}",
      "T_N(\\cos\\theta)=\\cos(N\\theta)"
    ],
    "steps": [
      "确定允许纹波在哪个频带。",
      "选择I型或II型并求参数。",
      "验证通阻带峰值，而非只检查单个边缘。"
    ],
    "pitfalls": [
      "纹波参数ε不是直接等于dB纹波。"
    ],
    "example": {
      "title": "ε与边缘幅度",
      "question": "I型ε=0.5，Ω=Ω_c，求幅度平方。",
      "hints": [
        "T_N(1)=1。"
      ],
      "steps": [
        "1/(1+0.25)=0.8。"
      ],
      "answer": "幅度平方0.8，幅度√0.8。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "II型Chebyshev纹波出现在哪里？",
      "options": [
        "阻带",
        "通带",
        "两带一定都有",
        "完全没有"
      ],
      "correct": 0,
      "explanation": "II型为通带单调、阻带等波纹。"
    }
  },
  {
    "id": "elliptic",
    "chapter": "B",
    "title": "椭圆原型与选择",
    "english": "Elliptic Filters",
    "book": 1060,
    "slides": [],
    "intro": "同时允许通带和阻带纹波，追求紧凑过渡。",
    "concept": [
      "椭圆滤波器在通带与阻带都呈等波纹，常能以较低阶数满足给定幅度规格，但相位与群延迟可能更不平坦。",
      "阻带的有限频率传输零点制造深陷波，帮助快速过渡。它们不是数值错误，而是原型设计的一部分。",
      "选择原型应同时考虑幅度指标、延迟、有限精度和实现复杂度。最低阶并不自动代表最合适的系统。"
    ],
    "formulas": [
      "H(s)=K\\frac{\\prod_k(s-z_k)}{\\prod_k(s-p_k)},\\qquad\\operatorname{Re}p_k<0"
    ],
    "steps": [
      "把必须满足的幅度与延迟指标分别列出。",
      "比较Butterworth、Chebyshev、椭圆原型。",
      "检查映射后稳定性、频响与二阶节实现的数值行为。"
    ],
    "pitfalls": [
      "不能仅凭阶数给所有任务统一排序。"
    ],
    "example": {
      "title": "识别传输零点",
      "question": "稳定系统分子含s²+Ω₀²，且未抵消。在Ω=Ω₀处响应怎样？",
      "hints": [
        "代入s=jΩ₀。"
      ],
      "steps": [
        "s²+Ω₀²=−Ω₀²+Ω₀²=0。",
        "若分母非零，整个响应为0。"
      ],
      "answer": "该频率为传输零点，幅度为0。",
      "source": "自编例题"
    },
    "quiz": {
      "question": "椭圆滤波器通常在哪些带有纹波？",
      "options": [
        "通带和阻带",
        "只通带",
        "只阻带",
        "都没有"
      ],
      "correct": 0,
      "explanation": "双带等波纹是其典型特性。"
    }
  }
]);
