Object.assign(window.PROBLEMS, {
  "12.1": {
    "question": "实因果序列的DTFT实部为2−2a cosω，求虚部。",
    "hint": "实因果序列中，cos(nω)的系数等于x[n]。",
    "steps": [
      "\\(X= x[0]+\\sum_{n=1}^\\infty x[n](\\cos n\\omega-j\\sin n\\omega)\\)。对比实部得x[0]=2、x[1]=−2a，其余为0。",
      "代回虚部：−x[1]sinω=2a sinω。"
    ],
    "answer": "\\(X_I=2a\\sin\\omega\\)。",
    "sourcePage": 969,
    "solutionStatus": "complete"
  },
  "12.2": {
    "question": "实因果x[n]满足Re X=5/4−cosω，求x[n]。",
    "hint": "这里给的是实部，不是幅度平方。",
    "steps": [
      "常数项给x[0]=5/4；cosω项给x[1]=−1；其他正时刻系数均为0。",
      "负时刻由因果性为0，因此该解唯一。"
    ],
    "answer": "\\(x[n]=\\frac54\\delta[n]-\\delta[n-1]\\)。",
    "sourcePage": 969,
    "solutionStatus": "complete"
  },
  "12.3": {
    "question": "实序列满足x[0]=0、x[1]>0、|X|²=5/4−cosω，找两个不同的解。",
    "hint": "把功率谱分解成两个两抽头序列的幅度平方，再延时。",
    "steps": [
      "\\( |1-\\tfrac12e^{-j\\omega}|^2=|\\tfrac12-e^{-j\\omega}|^2=5/4-\\cos\\omega\\)。",
      "统一延时1点不改变幅度平方，也使x[0]=0。两个序列在n=1处分别为1与1/2，均为正。"
    ],
    "answer": "\\(x_1=\\delta[n-1]-\\frac12\\delta[n-2],\\quad x_2=\\frac12\\delta[n-1]-\\delta[n-2]\\)。",
    "sourcePage": 969,
    "solutionStatus": "complete"
  },
  "12.4": {
    "question": "复序列x=x_r+jx_i的DTFT在π≤ω<2π为0；x_r[0]=1/2、x_r[±2]=−1/4，其他为0。求X的实、虚部。",
    "hint": "单边解析谱在正频率是实部序列频谱的两倍。",
    "steps": [
      "\\(X_r(e^{j\\omega})=1/2-(1/2)\\cos2\\omega\\)。这里X_r表示x_r的变换，不是Re X。",
      "由\\(X_r(\\omega)=[X(\\omega)+X^*(-\\omega)]/2\\)，在0<ω<π得到\\(X=2X_r=1-\\cos2\\omega\\)；负频率为0。",
      "此结果处处为实数，且ω=0、π处也为0，与单边条件相容。"
    ],
    "answer": "Re X在0<ω<π为1−cos2ω，负频率为0；Im X恒为0，按2π周期延拓。",
    "sourcePage": 970,
    "solutionStatus": "complete"
  },
  "12.5": {
    "question": "求理想Hilbert变换：(a)cos(ω₀n)；(b)sin(ω₀n)；(c)sin(ω₀n)/(πn)，其中0<ω₀<π，n=0取连续极限。",
    "hint": "正频率乘−j，负频率乘+j。",
    "steps": [
      "余弦的两个冲激分别乘−j与+j，合成为sin(ω₀n)；正弦同理变为−cos(ω₀n)。",
      "(c)原谱在|ω|<ω₀等于1，变换后正半带−j、负半带+j。逆变换给\\(x_i[n]=(1-\\cos(\\omega_0n))/(\\pi n)\\)，n≠0。",
      "n=0的正负频率积分相消，为0。频率0、π的纯谱线须另约定Hilbert增益，不能套正负频率公式。"
    ],
    "answer": "(a)sin(ω₀n)；(b)−cos(ω₀n)；(c)n≠0时(1−cosω₀n)/(πn)，n=0时0。",
    "sourcePage": 970,
    "solutionStatus": "complete"
  },
  "12.6": {
    "question": "实因果x的虚部X_I=2sinω−3sin4ω，且X(0)=6。求x。",
    "hint": "虚部确定正时刻样本，直流值确定x[0]。",
    "steps": [
      "由负号对应得到x[1]=−2、x[4]=3，其他n>0为0。",
      "X(0)=Σx=x[0]−2+3=6，所以x[0]=5。"
    ],
    "answer": "\\(x=5\\delta[n]-2\\delta[n-1]+3\\delta[n-4]\\)。",
    "sourcePage": 970,
    "solutionStatus": "complete"
  },
  "12.7": {
    "question": "实因果x满足Im X=sinω+2sin2ω。(a)给一个解；(b)判断唯一性，若不唯一再给一个解。",
    "hint": "原点冲激只改变频谱实部。",
    "steps": [
      "对比正弦项得到x[1]=−1、x[2]=−2，所有其他n>0系数为0。",
      "x[0]=C不进入虚部，可取任意实数。取C=0、1分别给两个不同解。"
    ],
    "answer": "通解\\(x=C\\delta[n]-\\delta[n-1]-2\\delta[n-2]\\)，C∈R，因此不唯一。",
    "sourcePage": 970,
    "solutionStatus": "complete"
  },
  "12.8": {
    "question": "实因果x满足X_I=3sin2ω。候选实部为①(3/2)cos2ω；②−3cos2ω−1；③−3cos2ω；④2cos3ω；⑤(3/2)cos2ω+1。哪些相容？",
    "hint": "虚部确定x[2]=−3。",
    "steps": [
      "x[n]=Cδ[n]−3δ[n−2]，所以实部必须为C−3cos2ω。",
      "②对应C=−1，③对应C=0；其余余弦系数或频率不匹配。"
    ],
    "answer": "只有②、③。",
    "sourcePage": 970,
    "solutionStatus": "complete"
  },
  "12.9": {
    "question": "实因果x满足Im X=3sinω+sin3ω，且X(π)=3。求x并判断唯一性。",
    "hint": "在ω=π时，奇数延迟的指数值是−1。",
    "steps": [
      "虚部确定x[1]=−3、x[3]=−1，只有x[0]=C未知。",
      "X(π)=C+3+1=3，故C=−1；所有样本均已确定。"
    ],
    "answer": "\\(x=-\\delta[n]-3\\delta[n-1]-\\delta[n-3]\\)，唯一。",
    "sourcePage": 971,
    "solutionStatus": "complete"
  },
  "12.10": {
    "question": "实冲激响应h稳定因果，其逆系统也稳定因果；|H|²=(5/4−cosω)/(5+4cosω)。尽可能确定h。",
    "hint": "稳定因果可逆排除单位圆外零点与纯延时，但不能确定整体正负。",
    "steps": [
      "分子\\(5/4-\\cos\\omega=|1-0.5e^{-j\\omega}|^2\\)，分母\\(5+4\\cos\\omega=|2+e^{-j\\omega}|^2\\)。",
      "最小相位谱因子为\\(H(z)=C(1-0.5z^{-1})/(2+z^{-1})\\)，实系数要求C=±1。零点0.5、极点−0.5均在圆内。",
      "将分母展开：h[0]=C/2，n≥1时\\(h[n]=-C(-1/2)^{n-1}/2\\)。非平凡全通因子会破坏稳定因果逆，因而没有其他选择。"
    ],
    "answer": "\\(h[n]=\\pm[\\tfrac12\\delta[n]-\\tfrac12(-\\tfrac12)^{n-1}u[n-1]]\\)。",
    "sourcePage": 971,
    "solutionStatus": "complete"
  },
  "12.11": {
    "question": "复序列x=x_r+jx_i的DTFT在−π≤ω<0为0；x_i[3]=4、x_i[−3]=−4，其他为0。求X的实、虚部。",
    "hint": "先求x_i的变换，再利用单边条件。",
    "steps": [
      "\\(X_i=4e^{-j3\\omega}-4e^{j3\\omega}=-8j\\sin3\\omega\\)。",
      "\\(X_i=[X(\\omega)-X^*(-\\omega)]/(2j)\\)。正频率另一项为0，因此\\(X=2jX_i=16\\sin3\\omega\\)；负频率为0。",
      "端点可取0；对普通DTFT这些孤立点不改变序列。"
    ],
    "answer": "Re X在0<ω<π为16sin3ω，负频率为0；Im X=0，2π周期延拓。",
    "sourcePage": 971,
    "solutionStatus": "complete"
  },
  "12.12": {
    "question": "实因果h满足h[0]>0，|H|²=10/9−(2/3)cosω。(a)给一个h；(b)是否唯一？若否再给一个。",
    "hint": "这题未要求稳定因果逆，因此可以反射零点。",
    "steps": [
      "\\( |1-\\tfrac13e^{-j\\omega}|^2=10/9-(2/3)\\cos\\omega\\)，得到h₁。",
      "\\( |\\tfrac13-e^{-j\\omega}|^2\\)相同，得到h₂。两者原点样本分别1与1/3，均正，且都因果。"
    ],
    "answer": "\\(h_1=\\delta[n]-\\tfrac13\\delta[n-1],\\quad h_2=\\tfrac13\\delta[n]-\\delta[n-1]\\)。不唯一。",
    "sourcePage": 971,
    "solutionStatus": "complete"
  },
  "12.13": {
    "question": "因果复序列的DTFT实部为1+cosω+sinω−sin2ω，求虚部。",
    "hint": "复序列仍可从实部确定正时刻复系数，但原点的虚部未知。",
    "steps": [
      "对x[n]=a_n+jb_n，\\( \\Re\\{x[n]e^{-jn\\omega}\\}=a_n\\cos n\\omega+b_n\\sin n\\omega\\)。",
      "因此x[0]=1+jC、x[1]=1+j、x[2]=−j，其他为0，C为任意实数。",
      "展开其虚部即得C+cosω−sinω−cos2ω。"
    ],
    "answer": "\\(X_I=C+\\cos\\omega-\\sin\\omega-\\cos2\\omega\\)，原点虚部未知，结果含任意实常数C。",
    "sourcePage": 971,
    "solutionStatus": "complete"
  },
  "12.14": {
    "question": "实反因果x（n>0为0）的实部为Σ_{k=0}∞(1/2)^k cos(kω)，求虚部。",
    "hint": "反因果样本对应正指数。",
    "steps": [
      "反因果性给x[−k]=(1/2)^k，k≥0。",
      "\\(X=\\sum_{k=0}^{\\infty}(e^{j\\omega}/2)^k=1/(1-e^{j\\omega}/2)\\)。乘共轭分母取虚部。"
    ],
    "answer": "\\(X_I=\\sum_{k=1}^{\\infty}2^{-k}\\sin k\\omega=\\frac{(1/2)\\sin\\omega}{5/4-\\cos\\omega}\\)。",
    "sourcePage": 971,
    "solutionStatus": "complete"
  },
  "12.15": {
    "question": "实因果x满足Im X=sinω，且Σ_nx[n]=3，求x。",
    "hint": "总和就是直流频响。",
    "steps": [
      "x[1]=−1，其他正时刻为0。",
      "x[0]−1=3，故x[0]=4。"
    ],
    "answer": "\\(x=4\\delta[n]-\\delta[n-1]\\)。",
    "sourcePage": 972,
    "solutionStatus": "complete"
  },
  "12.16": {
    "question": "实因果x的实部为2−4cos3ω，同时X(π)=7。条件是否相容？",
    "hint": "在π处正弦项为0。",
    "steps": [
      "第一条件唯一确定x=2δ[n]−4δ[n−3]。",
      "其X(π)=2−4cos3π=6，不等于7；甚至直接代实部就有Re X(π)=6。"
    ],
    "answer": "不相容，不存在满足两条件的序列。",
    "sourcePage": 972,
    "solutionStatus": "complete"
  },
  "12.17": {
    "question": "实因果长度2序列的2点DFT实部为[2,−4]，能否唯一确定x[0],x[1]？",
    "hint": "2点DFT的基底只含±1，实输入的DFT没有虚部。",
    "steps": [
      "x[0]+x[1]=2，x[0]−x[1]=−4。",
      "两式相加得x[0]=−1，再得x[1]=3。"
    ],
    "answer": "唯一，x[0]=−1，x[1]=3，其余为0。",
    "sourcePage": 972,
    "solutionStatus": "complete"
  },
  "12.18": {
    "question": "实因果长度3序列的3点DFT实部（图P12.18）为[9,6,6]。找两个解，其中仅一个满足周期因果条件x[n]=0（3/2<n≤2）。",
    "hint": "实部只确定x[1]+x[2]，不能区分两者。",
    "steps": [
      "设s=x[1]+x[2]。在k=0有x[0]+s=9；k=1,2有x[0]−s/2=6。",
      "解得x[0]=7、s=2。通解为[7,t,2−t]。周期因果要求x[2]=0，故t=2。"
    ],
    "answer": "可取[7,2,0]（周期因果）和[7,1,1]（非周期因果）。",
    "sourcePage": 972,
    "solutionStatus": "complete"
  },
  "12.19": {
    "question": "实因果长度4序列还满足周期因果性；4点DFT实部（图P12.19）为[4,1,2,1]。求jX_I[k]。",
    "hint": "周期因果要求x[3]=0，x[2]允许非零。",
    "steps": [
      "实部IDFT是圆周偶部：\\(x_e=[2,1/2,1,1/2]\\)。",
      "周期因果使x=[2,1,1,0]，因为x_e[1]=(x[1]+x[3])/2。",
      "DFT为[4,1−j,2,1+j]。"
    ],
    "answer": "\\(jX_I[k]=[0,-j,0,j]\\)。",
    "sourcePage": 972,
    "solutionStatus": "complete"
  },
  "12.20": {
    "question": "实因果长度6序列的DFT虚部仅k=2为−2j/√3、k=4为2j/√3，且(1/6)Σ_kX[k]=1。图P12.20的八候选按n=0…5为：①[0,2/3,−2/3,0,0,0]；②[1,0,0,0,2/3,−2/3]；③[1,2/3,−2/3,0,0,0]；④[6,4,−4,0,0,0]；⑤[0,2/3,−2/3,1,0,0]；⑥[0,−2/3,2/3,0,0,0]；⑦[2,2/3,−2/3,−1,0,0]；⑧[−1,−2/3,2/3,0,0,0]。哪些相容？",
    "hint": "分别检查圆周奇部与原点样本。",
    "steps": [
      "由逆DFT，x[0]=(1/6)ΣX=1，因此只可能②或③。",
      "虚部要求圆周奇部\\(x_o[n]=(2/(3\\sqrt3))\\sin(2\\pi n/3)=[0,1/3,-1/3,0,1/3,-1/3]\\)。",
      "②与③均满足(x[n]−x[6−n])/2等于上述值；其余候选已因x[0]排除。"
    ],
    "answer": "②、③。",
    "sourcePage": 972,
    "solutionStatus": "complete"
  },
  "12.21": {
    "question": "实因果序列的z变换除z=0外解析，已知Re X(ρe^{jω})=(ρ+αcosω)/ρ，α实。(a)用Cauchy–Riemann方程；(b)用时域因果性求X(z)。",
    "hint": "积分常数须用X(∞)=x[0]为实数消除。",
    "steps": [
      "(a)U=1+αρ⁻¹cosω；极坐标C-R方程给∂V/∂ω=−αρ⁻¹cosω，故V=−αρ⁻¹sinω+C(ρ)。第二个方程给C′(ρ)=0。",
      "于是X=1+αz⁻¹+jC。由于x[0]实且X(∞)=x[0]，C=0。",
      "(b)单位圆实部对应偶部\\(x_e=\\delta[n]+(\\alpha/2)(\\delta[n-1]+\\delta[n+1])\\)；因果性把n>0偶部加倍，给x=δ[n]+αδ[n−1]。"
    ],
    "answer": "\\(X(z)=1+\\alpha z^{-1}\\)，\\(x[n]=\\delta[n]+\\alpha\\delta[n-1]\\)。",
    "sourcePage": 973,
    "solutionStatus": "complete"
  },
  "12.22": {
    "question": "实因果x满足Re X=1+3cosω+cos3ω。给出x并说明唯一性。",
    "hint": "因果性把非零时刻的偶部恢复为完整序列。",
    "steps": [
      "x[0]=1、x[1]=3、x[3]=1；其他为0。",
      "任何另一个实因果序列若具有相同实部，其差的所有余弦系数为0，只能是零序列。"
    ],
    "answer": "\\(x=\\delta[n]+3\\delta[n-1]+\\delta[n-3]\\)，唯一。",
    "sourcePage": 974,
    "solutionStatus": "complete"
  },
  "12.23": {
    "question": "实因果x满足Im X=3sin2ω−2sin3ω，给一个解。",
    "hint": "允许任意原点冲激。",
    "steps": [
      "x[2]=−3、x[3]=2，其他正时刻为0。",
      "取x[0]=0即可；一般可加Cδ[n]。"
    ],
    "answer": "\\(x=-3\\delta[n-2]+2\\delta[n-3]\\)；通解另加任意实数Cδ[n]。",
    "sourcePage": 974,
    "solutionStatus": "complete"
  },
  "12.24": {
    "question": "N为偶数，周期序列一周期在n=0,N/2取1，n=1…N/2−1取2，其余取0。证明其未归一化DFS系数：k=0为N，奇k为−2jcot(πk/N)，非零偶k为0。",
    "hint": "将序列写成两个阶跃差再修正端点。",
    "steps": [
      "令L=N/2、q=z⁻¹，\\(U(z)=2(1-q^L)/(1-q)-1+q^L=(1-q^L)(1+q)/(1-q)\\)。",
      "采样q=e⁻ʲ²πᵏ/ᴺ。k≠0时qᴸ=(−1)^k，且\\( (1+q)/(1-q)=-j\\cot(\\pi k/N)\\)。",
      "非零偶k的前因子为0，奇k为2；k=0直接求和1+2(L−1)+1=N。"
    ],
    "answer": "结论成立；这里系数采用教材未除N的DFS/DFT约定。",
    "sourcePage": 974,
    "solutionStatus": "complete"
  },
  "12.25": {
    "question": "实序列支撑0…M−1，作奇数N≥M点DFT，只知其实部。(a)求可唯一恢复的最小N；(b)写X=X_R与U_N的圆周卷积，并求U_N。",
    "hint": "正时刻支撑与圆周反射支撑不能重叠。",
    "steps": [
      "(a)需M−1≤(N−1)/2，即N≥2M−1；否则存在n与N−n同在支撑，给这两点加入相反数不改变实部。故最小奇N=2M−1。",
      "令L=(N−1)/2。定义时间权重u_N[0]=1，1≤n≤L为2，L<n≤N−1为0。因果恢复为x=u_Nx_e。",
      "(b)若圆周卷积定义不含1/N，则\\(U_N[k]=\\frac1N[1+2\\sum_{n=1}^{L}e^{-j2\\pi kn/N}]\\)，\\(X[k]=\\sum_{r=0}^{N-1}X_R[r]U_N[(k-r)_N]\\)。",
      "k=0时U=1。k≠0时其实部为0，\\(U_N[k]=-\\frac{2j}{N}\\frac{\\sin(\\pi kL/N)\\sin(\\pi k(L+1)/N)}{\\sin(\\pi k/N)}\\)。"
    ],
    "answer": "最小N=2M−1；卷积核为所给有限几何和除N。",
    "sourcePage": 975,
    "solutionStatus": "complete"
  },
  "12.26": {
    "question": "图P12.26将实输入y_r直接作为输出实部，另一支经H产生实序列y_i，输出y=y_r+jy_i。要求Y在负频率等于Y_r、在正频率为0。确定H。",
    "hint": "先检查指定输出的实部是否仍等于原输入。",
    "steps": [
      "任意实y_r都满足Y_r(−ω)=Y_r*(ω)。若输出按题意只保留负半谱且幅度不变，则输出实部的频谱为\\( [Y(\\omega)+Y^*(-\\omega)]/2=Y_r(\\omega)/2\\)。",
      "这与图中实支路输出必须等于y_r矛盾，除非输入恒为0。因此按原题全部条件不存在H。",
      "若意图是负频率输出2Y_r，正确支路为负Hilbert变换：H=+j（正频率）、−j（负频率）。若坚持负频率输出Y_r，则实支路也要乘1/2，虚支路H为上述值的一半。"
    ],
    "answer": "原题的单位实支路与目标幅度不相容；需把目标改为2Y_r，或把实、虚两支共同减半。",
    "sourcePage": 975,
    "solutionStatus": "complete"
  },
  "12.27": {
    "question": "复序列h=h_r+jh_i的变换H=H_R+jH_I。以H_ER,H_OR表示H_R偶、奇部，H_EI,H_OI表示H_I偶、奇部；h_r的变换为H_A+jH_B，h_i的变换为H_C+jH_D。求A,B,C,D。",
    "hint": "实序列的变换实部偶、虚部奇。",
    "steps": [
      "展开\\(H=(H_A-H_D)+j(H_B+H_C)\\)。",
      "H_A与H_C是偶函数，H_B与H_D是奇函数；因此分别取偶奇部即可。"
    ],
    "answer": "\\(H_A=H_{ER},\\quad H_B=H_{OI},\\quad H_C=H_{EI},\\quad H_D=-H_{OR}\\)。",
    "sourcePage": 975,
    "solutionStatus": "complete"
  },
  "12.28": {
    "question": "理想Hilbert变换H在正频率−j、负频率+j，理想低通L截止π/2、通带增益1。(a)求频域互换关系；(b)求冲激响应关系；(c)两者以同一窗设计长度M+1的因果FIR，建立关系；(d)给例12.4的M=18,β=2.629与M=17,β=2.44所对应低通的幅频曲线。",
    "hint": "把半带低通向±π/2调制。",
    "steps": [
      "(a)\\(H(\\omega)=-j[L(\\omega-\\pi/2)-L(\\omega+\\pi/2)]\\)；又\\(L(\\omega)=1/2+(j/2)H(\\omega+\\pi/2)\\)，端点取平均值。",
      "(b)\\(h[n]=2\\sin(\\pi n/2)l[n]\\)；逆式\\(l[n]=\\delta[n]/2+(j/2)e^{-j\\pi n/2}h[n]\\)，其结果为实数。等价实式是\\(l[n]=\\delta[n]/2+\\sin(\\pi n/2)h[n]/2\\)。",
      "(c)设t=n−M/2，共用窗w[n]。\\(l_M[n]=w[n]\\sin(\\pi t/2)/(\\pi t)\\)，t=0取w[n]/2；\\(h_M[n]=2\\sin(\\pi t/2)l_M[n]\\)。M偶数时整数t，除中心外的偶t两者都为0，中心用l_M[M/2]=w[M/2]/2补回；M奇数时t为半整数，直接除以2sin(πt/2)即可恢复低通。",
      "(d)两条低通均围绕π/2过渡，通带接近1、阻带接近0，截止处约1/2。M=18是19抽头I型，M=17是18抽头II型且π处严格为0。以下程序给出精确系数与曲线，避免从教材图目测数值。"
    ],
    "answer": "频域、时域与窗后关系如上；两种低通均为截止π/2的Kaiser窗低通。",
    "sourcePage": 975,
    "solutionStatus": "complete",
    "code": "import numpy as np\nfrom scipy.signal import freqz\nimport matplotlib.pyplot as plt\nfor M,beta in [(18,2.629),(17,2.44)]:\n    n=np.arange(M+1); t=n-M/2\n    h=.5*np.sinc(t/2)*np.kaiser(M+1,beta)\n    omega,H=freqz(h,worN=4096)\n    print(M, h, 'DC',h.sum(), 'Nyquist',np.sum(h*(-1.)**n))\n    plt.plot(omega/np.pi,abs(H),label=f'M={M}')\nplt.xlabel('omega/pi'); plt.ylabel('|L|'); plt.legend(); plt.show()\n",
    "codeLanguage": "python"
  },
  "12.29": {
    "question": "实连续带通信号仅在Ω_c<|Ω|<Ω_c+ΔΩ非零，初采样率F_s=2π/T=2(Ω_c+ΔΩ)。形成单边复信号后以M=floor(F_s/ΔΩ)抽取。(a)证明比值非整数时抽取谱存在空白区；(b)如何选初采样率，使无混叠且恰好铺满一周？",
    "hint": "抽取把单边带宽扩大M倍，圆周长度始终2π。",
    "steps": [
      "(a)初始数字带宽Δω=2πΔΩ/F_s；抽取后的非零带宽为MΔω。若F_s/ΔΩ非整数，则M<F_s/ΔΩ，所以MΔω<2π，空白总长度2π−MΔω>0。",
      "例如F_s/ΔΩ=5.5，M=5，覆盖10π/5.5，剩余2π/11；即使频带跨过周期边界，空白总长度不变。",
      "(b)令F_s=MΔΩ，同时为安全采样原实信号要求F_s≥2(Ω_c+ΔΩ)。取整数\\(M=\\lceil2(\\Omega_c+\\Delta\\Omega)/\\Delta\\Omega\\rceil\\)，再令T=2π/(MΔΩ)。抽取后MΔω=2π，没有频带重叠与空白。"
    ],
    "answer": "选择初采样角频率为带宽的合适整数倍；最小可用M是上述上取整。信号自身谱零点不计为采样造成的空白。",
    "sourcePage": 976,
    "solutionStatus": "complete"
  },
  "12.30": {
    "question": "系统H在0≤ω≤π为1、−π<ω<0为0，输入限定为实且绝对可和。是否总能由输出唯一恢复输入？",
    "hint": "实序列的负半谱由正半谱共轭决定。",
    "steps": [
      "输出Y保留X正半谱；对−π<ω<0，令X(ω)=Y*(−ω)，对正半谱令X=Y。",
      "由绝对可和，X连续，端点可由相邻频率极限恢复；因此不会因单点定义丢失独立信息。",
      "时域等价为x[n]=2Re y[n]，在普通积分意义下端点不贡献单独谱线。"
    ],
    "answer": "可以唯一恢复：补共轭负半谱后逆变换，或直接取2Re y[n]。",
    "sourcePage": 976,
    "solutionStatus": "complete"
  },
  "12.31": {
    "question": "由单位圆实部Re H(e^{jθ})，推导实、稳定、因果h在单位圆外的H(z)积分式。原题括号误写h[n]=0(n>0)，与“因果、圆外”相反，按因果h[n]=0(n<0)求解，并说明若照括号理解的变化。",
    "hint": "将因果序列从偶部恢复，再把几何级数合并为积分核。",
    "steps": [
      "令U(θ)=Re H(e^{jθ})。傅里叶系数给\\(h[0]=(2\\pi)^{-1}\\int_{-\\pi}^{\\pi}U(\\theta)d\\theta\\)，n>0时\\(h[n]=\\pi^{-1}\\int U(\\theta)e^{jn\\theta}d\\theta\\)。",
      "代入H并在|z|>1交换绝对收敛级数与积分；用\\(1+2\\sum_{n=1}^\\infty(e^{j\\theta}/z)^n=(z+e^{j\\theta})/(z-e^{j\\theta})\\)。",
      "得到\\(H(z)=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}U(\\theta)\\frac{z+e^{j\\theta}}{z-e^{j\\theta}}d\\theta,\\quad |z|>1\\)。",
      "若确实是反因果，则有效域是|z|<1，核改为\\( (e^{j\\theta}+z)/(e^{j\\theta}-z)\\)。一般反因果稳定序列不能保证在整个圆外定义H。"
    ],
    "answer": "因果圆外积分核为(z+e^{jθ})/(z−e^{jθ})；原题n>0是方向错误。",
    "sourcePage": 977,
    "solutionStatus": "complete"
  },
  "12.32": {
    "question": "理想Hilbert算子频响−jsgnω，冲激响应h[n]=(1−cosπn)/(πn)，h[0]=0。证明(a)H(Hx)=−x；(b)Σx[n]H{x[n]}=0；(c)H{x*y}=H{x}*y=x*H{y}。",
    "hint": "在频域分别用平方、奇偶性和乘法交换律。",
    "steps": [
      "(a)除0、π端点外，\\( (-j\\operatorname{sgn}\\omega)^2=-1\\)，故对有限能量序列按均方意义成立。含直流或Nyquist谱线的非有限能量序列需另处理，不能无条件套用。",
      "(b)实有限能量x的|X|²为偶函数。Parseval给\\( \\sum_nx[n](Hx)[n]=(2\\pi)^{-1}\\int |X|^2H^*d\\omega=0\\)，因被积函数为奇函数。也可利用h[n]奇性在双重求和中交换两指标。",
      "(c)三者频谱分别为HXY、(HX)Y、X(HY)，相同。在卷积存在（例如相关序列绝对可和，或相应有界乘子作用于平方可和序列）时逆变换相同。"
    ],
    "answer": "在上述收敛条件下三性质成立；端点谱线与不存在的卷积不属于无条件适用范围。",
    "sourcePage": 977,
    "solutionStatus": "complete"
  },
  "12.33": {
    "question": "实平稳随机输入x_r经理想Hilbert变换得到x_i。(a)求φ_ii；(b)求φ_ri并证明为奇；(c)求解析信号x=x_r+jx_i的自相关；(d)求其功率谱。采用φ_ab[m]=E{a[n+m]b*[n]}。",
    "hint": "先写滤波后相关，再用H=−jsgnω与|H|²=1。",
    "steps": [
      "(a)\\( \\phi_{ii}[m]=\\sum_{k,l}h[k]h[l]\\phi_{rr}[m-k+l]=(h*h[-\\cdot]*\\phi_{rr})[m]\\)。无端点谱线时|H|²=1，故φ_ii=φ_rr。",
      "(b)\\( \\phi_{ri}[m]=\\sum_lh[l]\\phi_{rr}[m+l]=-(h*\\phi_{rr})[m]\\)。h奇、φ_rr偶，因此φ_ri奇；φ_ir=h*φ_rr=−φ_ri。",
      "(c)展开共轭乘积得\\( \\phi_{xx}=2\\phi_{rr}+2j(h*\\phi_{rr})\\)。",
      "(d)\\(P_{xx}(\\omega)=|1+jH|^2P_{rr}=4P_{rr}\\)在0<ω<π，负频率为0。若输入含均值/端点谱线且Hilbert端点设0，该部分保持原功率，不能乘4；前述相关等式需扣除端点谱线后使用。"
    ],
    "answer": "解析信号正频率功率为原信号4倍、负频率为0；总功率为实输入2倍（无端点谱线时）。",
    "sourcePage": 977,
    "solutionStatus": "complete"
  },
  "12.34": {
    "question": "实带通信号先采样T、形成正半谱解析信号，再抽取M得到s_d。重建：两实支插零M，经过复带通Hᶦ（ω_c<ω<ω_c+Δω增益M，其余0），取实部后理想D/C。(a)证明恢复；(b)求hᶦ；(c)仅用实运算并删去不必要支路；(d)若抽取与插零间加入H，要求最终只保留原连续带宽的下半段，求H。",
    "hint": "插零产生M个镜像，选回原正频带并补增益M。",
    "steps": [
      "(a)抽取无混叠时S_d(ω)是原解析谱的伸展并缩小1/M。插零得到S_d(Mω)，在原带内等于S(ω)/M；乘Hᶦ恢复S，取实部恢复S_r，理想D/C恢复s_c。例12.13中M=5，带宽2π/5，此逻辑逐段成立。",
      "(b)设ω₁=ω_c、ω₂=ω_c+Δω、ω_m=(ω₁+ω₂)/2。\\(h^i[n]=M e^{j\\omega_m n}\\sin(\\Delta\\omega n/2)/(\\pi n)\\)，n≠0；\\(h^i[0]=M\\Delta\\omega/(2\\pi)\\)。实部、虚部分别将指数换cos、sin，虚部原点为0。",
      "(c)插零后的实、虚输入记u_r,u_i。只计算\\(y_r=h_r^i*u_r-h_i^i*u_i\\)送D/C即可；无需计算输出虚部\\(h_i^i*u_r+h_r^i*u_i\\)。",
      "(d)在抽取后的频率圆周，令H(ω)=1当存在Ω∈(Ω_c,Ω_c+ΔΩ/2)使ω≡MTΩ(mod2π)，对上半带对应频率令0；其他频率可设0。无混叠确保映射单值。虽H通常是复滤波器，最终取实部会自动补出负频共轭带，从而实现所需实带通。"
    ],
    "answer": "重建核与两实卷积如上；低速滤波器通带是原正频带下半段经ω=MTΩ模2π映射得到的圆周区间。",
    "sourcePage": 978,
    "solutionStatus": "complete"
  },
  "12.35": {
    "question": "复倒谱定义为log X(z)的逆z变换，ROC含单位圆。(a,b)证明因果复倒谱与最小相位等价。对A>0以及|a_k|,|b_k|,|c_k|,|d_k|<1的因子式X=A·Π(1−a_kz⁻¹)Π(1−b_kz)/[Π(1−c_kz⁻¹)Π(1−d_kz)]，(c)求log X；(d)求倒谱；(e)解释等价性。",
    "hint": "对log(1−q)使用−Σqⁿ/n，留意左边项的n为负。",
    "steps": [
      "(a,b)严格说log X在X的零点或极点产生对数奇点，并非普通极点。其导数X′/X才有极点。因果倒谱的ROC向外延伸且含单位圆，要求这些未抵消奇点全部在圆内；同时须移除纯延时的线性相位，并固定连续对数分支。反过来，零极点都在圆内、无额外延时的最小相位X可在包含圆外的区域取解析对数，展开只含z的非正次幂。",
      "(c)\\( \\hat X=\\log A+\\sum_k\\log(1-a_kz^{-1})-\\sum_k\\log(1-c_kz^{-1})+\\sum_k\\log(1-b_kz)-\\sum_k\\log(1-d_kz)\\)。",
      "(d)\\( \\hat x[0]=\\log A\\)。对n>0，\\( \\hat x[n]=(\\sum_kc_k^n-\\sum_ka_k^n)/n\\)。对n<0，\\( \\hat x[n]=(\\sum_kb_k^{-n}-\\sum_kd_k^{-n})/n\\)。",
      "每个右边级数要求|z|大于对应a,c的模；每个左边级数要求|z|小于对应1/b,1/d的模，因此共同ROC包含单位圆。",
      "(e)化简抵消因子后，倒谱无n<0项当且仅当不存在b,d对应的圆外零极点。纯增益A只贡献原点，这恰是本题规范化因子式的最小相位条件。不能忽略分支与延时条件，把任意含纯延时的序列也误称可因果稳定求逆。"
    ],
    "answer": "倒谱由原点log A、正时刻圆内因子的幂和、负时刻圆外因子的幂和组成；约去公共因子并固定零延时对数分支后，因果倒谱等价于最小相位。",
    "sourcePage": 979,
    "solutionStatus": "complete"
  }
});
