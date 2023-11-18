// DESENVOLVIDO POR:
//Raphael Garavati Erbert, R.A: 22.123.014-7
//Nathan Gabriel da Fonseca Leite, R.A: 22.123.028-7
//Ana Carolina Lazzuri, R.A: 22.123.001-4

// constantes do robo
const Gravidade = -9.8,raioDeInterceptacao = 0.1115, veloMaxima = 2.8, aceleracao = 2.8, aceleracaoXBola = -0.5276, aceleracaoYBola = -0.4,Desaceleracao=(-2.8),veloMinima=0;

// Vetores 
var vetorTempo = ['0', '0.02', '0.04', '0.06', '0.08', '0.1', '0.12', '0.14', '0.16', '0.18', '0.2', '0.22', '0.24', '0.26', '0.28', '0.3', '0.32', '0.34', '0.36', '0.38', '0.4', '0.42', '0.44', '0.46', '0.48', '0.5', '0.52', '0.54', '0.56', '0.58', '0.6', '0.62', '0.64', '0.66', '0.68', '0.7', '0.72', '0.74', '0.76', '0.78', '0.8', '0.82', '0.84', '0.86', '0.88', '0.9', '0.92', '0.94', '0.96', '0.98', '1', '1.02', '1.04', '1.06', '1.08', '1.1', '1.12', '1.14', '1.16', '1.18', '1.2', '1.22', '1.24', '1.26', '1.28', '1.3', '1.32', '1.34', '1.36', '1.38', '1.4', '1.42', '1.44', '1.46', '1.48', '1.5', '1.52', '1.54', '1.56', '1.58', '1.6', '1.62', '1.64', '1.66', '1.68', '1.7', '1.72', '1.74', '1.76', '1.78', '1.8', '1.82', '1.84', '1.86', '1.88', '1.9', '1.92', '1.94', '1.96', '1.98', '2', '2.02', '2.04', '2.06', '2.08', '2.1', '2.12', '2.14', '2.16', '2.18', '2.2', '2.22', '2.24', '2.26', '2.28', '2.3', '2.32', '2.34', '2.36', '2.38', '2.4', '2.42', '2.44', '2.46', '2.48', '2.5', '2.52', '2.54', '2.56', '2.58', '2.6', '2.62', '2.64', '2.66', '2.68', '2.7', '2.72', '2.74', '2.76', '2.78', '2.8', '2.82', '2.84', '2.86', '2.88', '2.9', '2.92', '2.94', '2.96', '2.98', '3', '3.02', '3.04', '3.06', '3.08', '3.1', '3.12', '3.14', '3.16', '3.18', '3.2', '3.22', '3.24', '3.26', '3.28', '3.3', '3.32', '3.34', '3.36', '3.38', '3.4', '3.42', '3.44', '3.46', '3.48', '3.5', '3.52', '3.54', '3.56', '3.58', '3.6', '3.62', '3.64', '3.66', '3.68', '3.7', '3.72', '3.74', '3.76', '3.78', '3.8', '3.82', '3.84', '3.86', '3.88', '3.9', '3.92', '3.94', '3.96', '3.98', '4', '4.02', '4.04', '4.06', '4.08', '4.1', '4.12', '4.14', '4.16', '4.18', '4.2', '4.22', '4.24', '4.26', '4.28', '4.3', '4.32', '4.34', '4.36', '4.38', '4.4', '4.42', '4.44', '4.46', '4.48', '4.5', '4.52', '4.54', '4.56', '4.58', '4.6', '4.62', '4.64', '4.66', '4.68', '4.7', '4.72', '4.74', '4.76', '4.78', '4.8', '4.82', '4.84', '4.86', '4.88', '4.9', '4.92', '4.94', '4.96', '4.98', '5', '5.02', '5.04', '5.06', '5.08', '5.1', '5.12', '5.14', '5.16', '5.18', '5.2', '5.22', '5.24', '5.26', '5.28', '5.3', '5.32', '5.34', '5.36', '5.38', '5.4', '5.42', '5.44', '5.46', '5.48', '5.5', '5.52', '5.54', '5.56', '5.58', '5.6', '5.62', '5.64', '5.66', '5.68', '5.7', '5.72', '5.74', '5.76', '5.78', '5.8', '5.82', '5.84', '5.86', '5.88', '5.9', '5.92', '5.94', '5.96', '5.98', '6', '6.02', '6.04', '6.06', '6.08', '6.1', '6.12', '6.14', '6.16', '6.18', '6.2', '6.22', '6.24', '6.26', '6.28', '6.3', '6.32', '6.34', '6.36', '6.38', '6.4', '6.42', '6.44', '6.46', '6.48', '6.5', '6.52', '6.54', '6.56', '6.58', '6.6', '6.62', '6.64', '6.66', '6.68', '6.7', '6.72', '6.74', '6.76', '6.78', '6.8', '6.82', '6.84', '6.86', '6.88', '6.9', '6.92', '6.94', '6.96', '6.98', '7', '7.02', '7.04', '7.06', '7.08', '7.1', '7.12', '7.14', '7.16', '7.18', '7.2', '7.22', '7.24', '7.26', '7.28']
vetorBolaX = ['1', '1.01000004', '1.02000032', '1.03000108', '1.04000256', '1.050005', '1.06000864', '1.07001372', '1.08002048', '1.09002916', '1.10004', '1.11005324', '1.12006912', '1.13008788', '1.14010976', '1.150135', '1.16016384', '1.17019652', '1.18023328', '1.19027436', '1.20032', '1.21037044', '1.22042592', '1.23048668', '1.24055296', '1.250625', '1.26070304', '1.27078732', '1.28087808', '1.29097556', '1.30108', '1.31119164', '1.32131072', '1.33143748', '1.34157216', '1.351715', '1.36186624', '1.37202612', '1.38219488', '1.39237276', '1.40256', '1.41275684', '1.42296352', '1.43318028', '1.44340736', '1.453645', '1.46389344', '1.47415292', '1.48442368', '1.49470596', '1.505', '1.51530604', '1.52562432', '1.53595508', '1.54629856', '1.556655', '1.56702464', '1.57740772', '1.58780448', '1.59821516', '1.60864', '1.61907924', '1.62953312', '1.64000188', '1.65048576', '1.660985', '1.67149984', '1.68203052', '1.69257728', '1.70314036', '1.71372', '1.72431644', '1.73492992', '1.74556068', '1.75620896', '1.766875', '1.77755904', '1.78826132', '1.79898208', '1.80972156', '1.82048', '1.83125764', '1.84205472', '1.85287148', '1.86370816', '1.874565', '1.88544224', '1.89634012', '1.90725888', '1.91819876', '1.92916', '1.94014284', '1.95114752', '1.96217428', '1.97322336', '1.984295', '1.99538944', '2.00650692', '2.01764768', '2.02881196', '2.04', '2.05121204', '2.06244832', '2.07370908', '2.08499456', '2.096305', '2.10764064', '2.11900172', '2.13038848', '2.14180116', '2.15324', '2.16470524', '2.17619712', '2.18771588', '2.19926176', '2.210835', '2.22243584', '2.23406452', '2.24572128', '2.25740636', '2.26912', '2.28086244', '2.29263392', '2.30443468', '2.31626496', '2.328125', '2.34001504', '2.35193532', '2.36388608', '2.37586756', '2.38788', '2.39992364', '2.41199872', '2.42410548', '2.43624416', '2.448415', '2.46061824', '2.47285412', '2.48512288', '2.49742476', '2.50976', '2.52212884', '2.53453152', '2.54696828', '2.55943936', '2.571945', '2.58448544', '2.59706092', '2.60967168', '2.62231796', '2.635', '2.64771804', '2.66047232', '2.67326308', '2.68609056', '2.698955', '2.71185664', '2.72479572', '2.73777248', '2.75078716', '2.76384', '2.77693124', '2.79006112', '2.80322988', '2.81643776', '2.829685', '2.84297184', '2.85629852', '2.86966528', '2.88307236', '2.89652', '2.91000844', '2.92353792', '2.93710868', '2.95072096', '2.964375', '2.97807104', '2.99180932', '3.00559008', '3.01941356', '3.03328', '3.04718964', '3.06114272', '3.07513948', '3.08918016', '3.103265', '3.11739424', '3.13156812', '3.14578688', '3.16005076', '3.17436', '3.18871484', '3.20311552', '3.21756228', '3.23205536', '3.246595', '3.26118144', '3.27581492', '3.29049568', '3.30522396', '3.32', '3.33482404', '3.34969632', '3.36461708', '3.37958656', '3.394605', '3.40967264', '3.42478972', '3.43995648', '3.45517316', '3.47044', '3.48575724', '3.50112512', '3.51654388', '3.53201376', '3.547535', '3.56310784', '3.57873252', '3.59440928', '3.61013836', '3.62592', '3.64175444', '3.65764192', '3.67358268', '3.68957696', '3.705625', '3.72172704', '3.73788332', '3.75409408', '3.77035956', '3.78668', '3.80305564', '3.81948672', '3.83597348', '3.85251616', '3.869115', '3.88577024', '3.90248212', '3.91925088', '3.93607676', '3.95296', '3.96990084', '3.98689952', '4.00395628', '4.02107136', '4.038245', '4.05547744', '4.07276892', '4.09011968', '4.10752996', '4.125', '4.14253004', '4.16012032', '4.17777108', '4.19548256', '4.213255', '4.23108864', '4.24898372', '4.26694048', '4.28495916', '4.30304', '4.32118324', '4.33938912', '4.35765788', '4.37598976', '4.394385', '4.41284384', '4.43136652', '4.44995328', '4.46860436', '4.48732', '4.50610044', '4.52494592', '4.54385668', '4.56283296', '4.581875', '4.60098304', '4.62015732', '4.63939808', '4.65870556', '4.67808', '4.69752164', '4.71703072', '4.73660748', '4.75625216', '4.775965', '4.79574624', '4.81559612', '4.83551488', '4.85550276', '4.87556', '4.89568684', '4.91588352', '4.93615028', '4.95648736', '4.976895', '4.99737344', '5.01792292', '5.03854368', '5.05923596', '5.08', '5.10083604', '5.12174432', '5.14272508', '5.16377856', '5.184905', '5.20610464', '5.22737772', '5.24872448', '5.27014516', '5.29164', '5.31320924', '5.33485312', '5.35657188', '5.37836576', '5.400235', '5.42217984', '5.44420052', '5.46629728', '5.48847036', '5.51072', '5.53304644', '5.55544992', '5.57793068', '5.60048896', '5.623125', '5.64583904', '5.66863132', '5.69150208', '5.71445156', '5.73748', '5.76058764', '5.78377472', '5.80704148', '5.83038816', '5.853815', '5.87732224', '5.90091012', '5.92457888', '5.94832876', '5.97216', '5.99607284', '6.02006752', '6.04414428', '6.06830336', '6.092545', '6.11686944', '6.14127692', '6.16576768', '6.19034196', '6.215', '6.23974204', '6.26456832', '6.28947908', '6.31447456', '6.339555', '6.36472064', '6.38997172', '6.41530848', '6.44073116', '6.46624', '6.49183524', '6.51751712', '6.54328588', '6.56914176']
vetorBolaY = ['0.5', '0.517992', '0.535968', '0.553928', '0.571872', '0.5898', '0.607712', '0.625608', '0.643488', '0.661352', '0.6792', '0.697032', '0.714848', '0.732648', '0.750432', '0.7682', '0.785952', '0.803688', '0.821408', '0.839112', '0.8568', '0.874472', '0.892128', '0.909768', '0.927392', '0.945', '0.962592', '0.980168', '0.997728', '1.015272', '1.0328', '1.050312', '1.067808', '1.085288', '1.102752', '1.1202', '1.137632', '1.155048', '1.172448', '1.189832', '1.2072', '1.224552', '1.241888', '1.259208', '1.276512', '1.2938', '1.311072', '1.328328', '1.345568', '1.362792', '1.38', '1.397192', '1.414368', '1.431528', '1.448672', '1.4658', '1.482912', '1.500008', '1.517088', '1.534152', '1.5512', '1.568232', '1.585248', '1.602248', '1.619232', '1.6362', '1.653152', '1.670088', '1.687008', '1.703912', '1.7208', '1.737672', '1.754528', '1.771368', '1.788192', '1.805', '1.821792', '1.838568', '1.855328', '1.872072', '1.8888', '1.905512', '1.922208', '1.938888', '1.955552', '1.9722', '1.988832', '2.005448', '2.022048', '2.038632', '2.0552', '2.071752', '2.088288', '2.104808', '2.121312', '2.1378', '2.154272', '2.170728', '2.187168', '2.203592', '2.22', '2.236392', '2.252768', '2.269128', '2.285472', '2.3018', '2.318112', '2.334408', '2.350688', '2.366952', '2.3832', '2.399432', '2.415648', '2.431848', '2.448032', '2.4642', '2.480352', '2.496488', '2.512608', '2.528712', '2.5448', '2.560872', '2.576928', '2.592968', '2.608992', '2.625', '2.640992', '2.656968', '2.672928', '2.688872', '2.7048', '2.720712', '2.736608', '2.752488', '2.768352', '2.7842', '2.800032', '2.815848', '2.831648', '2.847432', '2.8632', '2.878952', '2.894688', '2.910408', '2.926112', '2.9418', '2.957472', '2.973128', '2.988768', '3.004392', '3.02', '3.035592', '3.051168', '3.066728', '3.082272', '3.0978', '3.113312', '3.128808', '3.144288', '3.159752', '3.1752', '3.190632', '3.206048', '3.221448', '3.236832', '3.2522', '3.267552', '3.282888', '3.298208', '3.313512', '3.3288', '3.344072', '3.359328', '3.374568', '3.389792', '3.405', '3.420192', '3.435368', '3.450528', '3.465672', '3.4808', '3.495912', '3.511008', '3.526088', '3.541152', '3.5562', '3.571232', '3.586248', '3.601248', '3.616232', '3.6312', '3.646152', '3.661088', '3.676008', '3.690912', '3.7058', '3.720672', '3.735528', '3.750368', '3.765192', '3.78', '3.794792', '3.809568', '3.824328', '3.839072', '3.8538', '3.868512', '3.883208', '3.897888', '3.912552', '3.9272', '3.941832', '3.956448', '3.971048', '3.985632', '4.0002', '4.014752', '4.029288', '4.043808', '4.058312', '4.0728', '4.087272', '4.101728', '4.116168', '4.130592', '4.145', '4.159392', '4.173768', '4.188128', '4.202472', '4.2168', '4.231112', '4.245408', '4.259688', '4.273952', '4.2882', '4.302432', '4.316648', '4.330848', '4.345032', '4.3592', '4.373352', '4.387488', '4.401608', '4.415712', '4.4298', '4.443872', '4.457928', '4.471968', '4.485992', '4.5', '4.513992', '4.527968', '4.541928', '4.555872', '4.5698', '4.583712', '4.597608', '4.611488', '4.625352', '4.6392', '4.653032', '4.666848', '4.680648', '4.694432', '4.7082', '4.721952', '4.735688', '4.749408', '4.763112', '4.7768', '4.790472', '4.804128', '4.817768', '4.831392', '4.845', '4.858592', '4.872168', '4.885728', '4.899272', '4.9128', '4.926312', '4.939808', '4.953288', '4.966752', '4.9802', '4.993632', '5.007048', '5.020448', '5.033832', '5.0472', '5.060552', '5.073888', '5.087208', '5.100512', '5.1138', '5.127072', '5.140328', '5.153568', '5.166792', '5.18', '5.193192', '5.206368', '5.219528', '5.232672', '5.2458', '5.258912', '5.272008', '5.285088', '5.298152', '5.3112', '5.324232', '5.337248', '5.350248', '5.363232', '5.3762', '5.389152', '5.402088', '5.415008', '5.427912', '5.4408', '5.453672', '5.466528', '5.479368', '5.492192', '5.505', '5.517792', '5.530568', '5.543328', '5.556072', '5.5688', '5.581512', '5.594208', '5.606888', '5.619552', '5.6322', '5.644832', '5.657448', '5.670048', '5.682632', '5.6952', '5.707752', '5.720288', '5.732808', '5.745312', '5.7578', '5.770272', '5.782728', '5.795168', '5.807592', '5.82', '5.832392', '5.844768', '5.857128', '5.869472', '5.8818', '5.894112', '5.906408', '5.918688', '5.930952', '5.9432', '5.955432', '5.967648', '5.979848', '5.992032']

//Velocidades
veloBolaX = [],
veloBolaY = [],
veloBola = [],
veloRobo = [],
veloRoboX = [], 
veloRoboY = [],

//Aceleracao e Desaceleracao
aceleracaoBolaX = [],
aceleracaoBolaY = [],
aceleracaoRoboI=[],
aceleracaoRobo = [],

//Posicao
posicaoInterBolaX=0,
posicaoInterBolaY=0,
PosicaoInterRoboX=0,
PosicaoInterRoboY=0,
vetorBolainterceptacaoX=[],
vetorBolainterceptacaoY=[],

//Distancia
distancia = [],
roboX = [], 
roboY = [],
DesaceleracaoDist=[],


//Angulo
cos = [], 
sin = [],

//Forca
vetorForcaXbola = [],
vetorForcaYbola = [],
vetorForcaXrobo = [],
vetorForcaYrobo = [],
vetorForcaXinterbola = 0,
vetorForcaYinterbola = 0,
vetorForcaXinterrobo = 0,
vetorForcaYinterrobo = 0,

//Tempo
tempoInterceptacao = 0,
vetorTempoInterceptacao = [];

var j = 0;

// x inicial e y inicial do robo

    let x = parseFloat(prompt("Digite o valor do robo em X (0 a 9)"));
    let y = parseFloat(prompt("Digite o valor do robo em Y (0 a 6)"));
    // adicionando o x e o y nos vetores posições:
    roboX.push(x);
    roboY.push(y);
    // calculando a distancia inicial do robo
    distancia.push( // Cálculo da distância por pitágoras: √(x_robo - x_bola)² + (y_robo - y_bola)²
        parseFloat(Math.sqrt(
            Math.pow(
                (roboX[0] - parseFloat(vetorBolaX[0])), 2) + 
            Math.pow(
                (roboY[0] - parseFloat(vetorBolaY[0])), 2)))
    );
    
    // acelercao do robo durante o movimento e velocidade da bola durante o movimento
    for(let i = 0; i < 365; i++){
        // aceleracao do robo e da bola estao sendo consideradas constantes e nao variam de acordo com o movimento
        aceleracaoRobo[i] = (aceleracao);
        aceleracaoRoboI[i] = (aceleracao);
        aceleracaoBolaX[i] = (aceleracaoXBola);
        aceleracaoBolaY[i] = (aceleracaoYBola);
    }
    // calculando a aceleracao do robo durante o movimento
    for(let i = 0; i < 365; i++){
        veloRobo[i] = (parseFloat(aceleracaoRobo[i]*vetorTempo[i])); // v = v0 + at com v = 0
        if(veloRobo[i] >= veloMaxima){
            veloRobo[i] = parseFloat(veloMaxima);
            aceleracaoRoboI[i] = 0; // Ao atingir a velocidade máxima a aceleração se torna constante e igual a 0
        }
    }
    // calculando a posicao do robo durante o movimento até a interceptacao
    for(let i = 0; i < 365; i++){
        // calcula a componente principal do vetor distancia a cada instante do movimento
        distancia[i] = ( // Novamente, utiliza pitágoras para saber a distância entre o robô e a bola
            parseFloat(
                Math.sqrt(
                    Math.pow(
                        (roboX[i] - parseFloat(vetorBolaX[i])),2)
                        ) + 
                Math.sqrt(
                    Math.pow(
                        (roboY[i] - parseFloat(vetorBolaY[i])),2)
                        )
            ));
        
        // calcula o cosseno e o seno de cada posicao para posteriormente calcular a velocidade em cada parte
        cos.push( // calcula o cosseno de um triângulo retângulo onde a base é a diferença entre x_bola e x_robo, a altura é a diferença entre y_bola e y_robo e a distância é pitágoras, sendo o ângulo aquele entre a hipotenusa e a base
            parseFloat(
                (parseFloat(vetorBolaX[i]) - roboX[i]) / (distancia[i])
            )
        );
        sin.push( // calcula o seno de um triângulo retângulo onde a base é a diferença entre x_bola e x_robo, a altura é a diferença entre y_bola e y_robo e a distância é pitágoras, sendo o ângulo aquele entre a hipotenusa e a base
            parseFloat(
                (parseFloat(vetorBolaY[i]) - roboY[i]) / (distancia[i])
            )
        );

        // calcula a velocidade em x e y do robo e da bola 
        veloRoboX.push(veloRobo[i]*(cos[i]));
        veloRoboY.push(veloRobo[i]*(sin[i]));
        veloBolaX.push(aceleracaoBolaX[i]*vetorTempo[i]);
        veloBolaY.push(aceleracaoBolaY[i]*vetorTempo[i]);

        // calcula a posicao futura do robo em cada componente 
        roboX[i + 1] = parseFloat(
            roboX[i] + (veloRobo[i]*(cos[i]*0.05)) // ponto x futuro do robô
        );                         
        roboY[i + 1] = parseFloat(
            roboY[i] + (veloRobo[i]*(sin[i]*0.05)) // ponto y futuro do robô
        );

        // --------------------------INICIO DO APROFUNDAMENTO---------------------- //

        vetorForcaXbola.push(0.046 * aceleracaoXBola); // Massa da bola * aceleracaoX
        vetorForcaYbola.push(0.046 * aceleracaoYBola); // Massa da bola * aceleracaoy
        vetorForcaXrobo.push(2.8*parseFloat(aceleracaoRobo[i])*cos[i]); // Massa da robo * aceleracaoX
        vetorForcaYrobo.push(2.8*parseFloat(aceleracaoRobo[i])*sin[i]); // Massa da robo * aceleracaoy

        // --------------------------FIM DO APROFUNDAMENTO------------------------- //

        if(roboX[i] >= parseFloat(vetorBolaX[i]) - 0.1115 && roboX[i] <= parseFloat(vetorBolaX[i]) + 0.1115 && roboY[i] >= parseFloat(vetorBolaY[i]) - 0.1115 && roboY[i] <= parseFloat(vetorBolaY[i]) + 0.1115){
            // Se o x_robo for maior ou igual ao x_bola - raio de interceptação e o x_robo for menor ou igual ao x_bola + raio de interceptação e y_robo for maior que o y_bola - raio de interceptação e y_robo for menor ou igual ao y_bola + raio de interceptação

            // Os dados do momento da interceptação são colocados nas variáveis de interceptação
            tempoInterceptacao = vetorTempo[i];
            posicaoInterBolaY = vetorBolaY[i];
            posicaoInterBolaX = vetorBolaX[i];
            PosicaoInterRoboX = roboX[i];
            PosicaoInterRoboY = roboY[i];
            j = i
            for (let n = 0; n < 3; n++){ // Laço que captura dados do momento da interceptação
                vetorTempoInterceptacao.push(vetorTempo[n]); 
                vetorBolainterceptacaoY.push(vetorBolaY[n]);
                vetorBolainterceptacaoX.push(vetorBolaX[n]);
            }
            console.log("Interceptou");
            break;
        }

    };

// Loop para percorrer o vetor de tempo




// ------------------------INICIO DA PROGRAMAÇÃO PARA OS GRÁFICOS------------------ //

    for (let i = 0; i < vetorForcaXbola.length; i++) {
        console.log("Seno:" + sin[i])
        console.log("Cosseno:" + cos[i])
        console.log("Aceleração:" + parseFloat(aceleracaoRobo[i]))
        console.log("Força bola x:" + vetorForcaXbola[i])
        console.log("Força bola y:" + vetorForcaYbola[i])
        console.log("Força robo x:" + vetorForcaXrobo[i])
        console.log("Força robo y:" + vetorForcaYrobo[i])
    }







// ------------------------INICIO DA PROGRAMAÇÃO PARA OS GRÁFICOS------------------ //


// cria os gráficos de acordo com o movimento do robo e da bola com os seus arrays 

    // cria o gráfico de posicao do robo
      
        var trajetoriaRxy= {
            x: roboX ,
            y: roboY,
            mode: 'lines+markers',
            name: 'Trajetoria feita pelo robô',
            line: {
                color: '#6495ED',
                width: 2
            }
        };
    
        var trajetoriaBinterxy = {
            x: vetorBolaX,
            y: vetorBolaY,
            mode: 'lines+markers',
            name: 'Trajetoria feita pela bola',
            line: {
                color: '#FF7F50',
                width: 1
            }
        };
    
        var data = [ trajetoriaRxy, trajetoriaBinterxy];
    
        var layout = {
            title:'Trajetoria Feita Pelo Robô e a Bola em X por Y '
        };
    
        Plotly.newPlot('Trajetoria_XY', data, layout);
        // componente x da posicao do robo pelo tempo
        var xt_robo = {
            x: vetorTempo,
            y: roboX ,
            mode: 'lines+markers',
            name: 'X por tempo robô',
            line: {
                color: '#6495ED',
                width: 1
            }
        };
        var xt_bola= {
            x: vetorTempo,
            y: vetorBolaX,
            mode: 'lines+markers',
            name: 'X por tempo bola',
            line: {
                color: '#FF7F50',
                width: 1
            }
        };
    
        var data = [xt_robo, xt_bola];
        var layout = {
            title: 'Posições em X do Robô e da Bola Pelo Tempo (t)'
        };
        Plotly.newPlot('x_roboEbola', data, layout);
    
        // componente y da posicao do robo pelo tempo
        var yt_robo = {
            x: vetorTempo,
            y: roboY,
            mode: 'lines+markers',
            name: 'Y por tempo robô',
            line: {
                color: '#6495ED',
                width: 1
            }
        };
        var yt_bola = {
            x: vetorTempo,
            y: vetorBolaY,
            mode: 'lines+markers',
            name: 'Y por tempo robô',
            line: {
                color: '#FF7F50',
                width: 1
            }
        };
    
        var data = [yt_robo, yt_bola];
        var layout = {
            title: 'Posições em Y do Robô e da Bola Pelo Tempo (t)'
        };
        Plotly.newPlot('y_roboEbola', data, layout);

    // componente x da velocidade do robo pelo tempo
    var vx_robo = {
        x: vetorTempo,
        y: veloRoboX,
        mode: 'lines+markers',
        name: 'vx por tempo  robô',
        line: {
            color: '#6495ED',
            width: 1
        }
    }
    var vx_bola = {
        x: vetorTempo,
        y: veloBolaX,
        mode: 'lines+markers',
        name: 'vx por tempo bola',
        line: {
            color: '#FF7F50',
            width: 1
        }
    }
    var data = [vx_robo, vx_bola];
    var layout = {
        title: 'Velocidade em x (vx) do Robô e da Bola pelo Tempo (t)'
    };
    Plotly.newPlot('vx_roboEbola', data, layout);

    // componente y da velocidade do robo pelo tempo
    var vy_robo = {
        x: vetorTempo,
        y: veloRoboY,
        mode: 'lines+markers',
        name: 'vx por tempo  robô',
        line: {
            color: '#6495ED',
            width: 1
        }
    }
    var vy_bola = {
        x: vetorTempo,
        y: veloBolaY,
        mode: 'lines+markers',
        name: 'vy por tempo  bola',
        line: {
            color: '#FF7F50',
            width: 1
        }
    }
    var data = [ vy_robo, vy_bola];
    var layout = {
        title: 'Velocidade em y (vy) do Robô e da Bola pelo Tempo (t)'
    };
    Plotly.newPlot('vy_roboEbola', data, layout);

    // graficos da aceleracao pelo tempo:
    var ax_robo = {
        x: vetorTempo,
        y: aceleracaoRoboI,
        mode: 'lines+markers',
        name: 'ax por tempo  robô',
        line: {
            color: '#6495ED',
            width: 1
        }
    }
    var ax_bola = {
        x: vetorTempo,
        y: aceleracaoBolaX,
        mode: 'lines+markers',
        name: 'ax por tempo  bola',
        line: {
            color: '#FF7F50',
            width: 1
        }
    }
    var data = [ax_robo, ax_bola];
    var layout = {
        title: 'Aceleração em x (ax) do Robô e da Bola pelo Tempo (t)'
    };
    Plotly.newPlot('ax_roboEbola', data, layout);

    var ay_robo = {
        x: vetorTempo,
        y: aceleracaoRoboI,
        mode: 'lines+markers',
        name: 'ay por tempo  robô',
        line: {
            color: '#6495ED',
            width: 1
        }
    }
    var ay_bola= {
        x: vetorTempo,
        y: aceleracaoBolaY,
        mode: 'lines+markers',
        name: 'ay por tempo  bola',
        line: {
            color: '#FF7F50',
            width: 1
        }
    }
    var data = [ay_robo, ay_bola];
    var layout = {
        title: 'Aceleração em y (ay) do Robô e da Bola pelo Tempo (t)'
    };
    Plotly.newPlot('ay_roboEbola', data, layout);

    var ForcaRoboXT = {
        x: vetorTempo,
        y: vetorForcaXrobo,
        mode: 'lines+markers',
        name: 'Força Res em x do robô por tempo',
        line: {
            color: '#6495ED',
            width: 1
        }
    }
    var ForcaBolaXT = {
        x: vetorTempo,
        y: vetorForcaXbola,
        mode: 'lines+markers',
        name: 'Força Res em x da bola por tempo',
        line: {
            color: '#FF7F50',
            width: 1
        }
    }
    var data = [ForcaRoboXT, ForcaBolaXT];
    var layout = {
        title: 'Força Resultante do Robô e da Bola em X pelo tempo'
    };
    Plotly.newPlot('xt_forcaRoboeBola', data, layout);



var ForcaRoboYT = {
    x: vetorTempo,
    y: vetorForcaYrobo,
    mode: 'lines+markers',
    name: 'Força Res em y do robô por tempo',
    line: {
        color: '#6495ED',
        width: 1
    }
}
var ForcaBolaYT = {
    x: vetorTempo,
    y: vetorForcaYbola,
    mode: 'lines+markers',
    name: 'Força Res em y da bola por tempo',
    line: {
        color: '#FF7F50',
        width: 1
    }
}
var data = [ForcaRoboYT, ForcaBolaYT];
var layout = {
    title: 'Força Resultante do Robô e da Bola em Y pelo tempo'
};
Plotly.newPlot('yt_forcaRoboeBola', data, layout);


var distRelativa_robo = {
    x: vetorTempo,
    y: distancia,
    mode: 'lines+markers',
    name: 'Distancia relativa',
    line: {
        color: '#6495ED',
        width: 1
    }
};


var data = [distRelativa_robo];
var layout = {
    title: 'Distância relativa do robo em relação a bola pelo tempo'
};
Plotly.newPlot('distanciaRelativaRobo', data, layout);


// --------------------------------------------------------------------------------------- //

// ------------------------INFORMAÇÕES QUE SERÃO EXIBIDAS NA TELA------------------ //

document.getElementById("aceleracaoRobo").innerHTML ="Aceleração = "+ aceleracao + " m/s²";      //
document.getElementById("velocidadeMax").innerHTML ="Velocidade máxima = "+ veloMaxima + " m/s"; // Exibe a aceleração, velocidade e massa do robô
document.getElementById("massaRobo").innerHTML ="Massa = " +2.2 + " kg";                         //

document.getElementById("vetorBolaXIntercept").innerHTML ="x = "+ Math.round(vetorBolaX[j]*100)/100 + " m"; //
document.getElementById("vetorBolaYIntercept").innerHTML ="y = "+ Math.round(vetorBolaY[j]*100)/100 + " m"; // Exibe a posição do momento da interceptação
document.getElementById("roboXIntercept").innerHTML ="x = "+ Math.round(roboX[j]*100)/100 + " m";           //
document.getElementById("roboYIntercept").innerHTML ="y = "+ Math.round(roboY[j]*100)/100 + " m";           //

document.getElementById("velocidadeXBolaIntercept").innerHTML ="vx = " +Math.round(veloBolaX[j]*100)/100 + " m/s";
document.getElementById("velocidadeYBolaIntercept").innerHTML ="vy = " +Math.round(veloBolaY[j]*100)/100 + " m/s";  // Exibe velocidade da bola e do robô do momento da interceptação 
document.getElementById("velocidadeRoboXIntercept").innerHTML ="vx = "+ Math.round((roboX[j]-roboX[j-1])/(cos[j]*0.05)*100)/100 + " m/s"; 
document.getElementById("velocidadeRoboYIntercept").innerHTML ="vy = "+ Math.round((roboY[j]-roboY[j-1])/(sin[j]*0.05)*100)/100 + " m/s"; 

document.getElementById("aceleracaoXBola").innerHTML ="ax = "+ Math.round(aceleracaoXBola*100)/100 + " m/s²"; //
document.getElementById("aceleracaoYBola").innerHTML ="ay = "+ Math.round(aceleracaoYBola*100)/100 + " m/s²"; // Exibe a aceleração da bola em x e y

let RX = parseFloat(roboX[j]) - parseFloat(roboX[0]);
let RY = parseFloat(roboY[j]) - parseFloat(roboY[0]);

document.getElementById("distanciaRoboX").innerHTML = "dx = " + Math.round(RX*100)/100 + " m";
document.getElementById("distanciaRoboY").innerHTML = "dy = " + Math.round(RY*100)/100 + " m";

document.getElementById("distanciaBolaX").innerHTML = "dx = " + Math.round(vetorBolaX[j] - vetorBolaX[0]*100)/100 + " m";
document.getElementById("distanciaBolaY").innerHTML = "dy = " + Math.round(vetorBolaY[j] - vetorBolaY[0]*100)/100 + " m";

document.getElementById("intercept").innerHTML = "O tempo de interceptação foi de " + "<b class='orange'>" + tempoInterceptacao + "</b>" + " segundos!";

document.getElementById("ForcaXRobo").innerHTML = " Variação da força do robô, até o momento da interceptação, em X: " + Math.round(parseFloat(vetorForcaXrobo[vetorForcaXrobo.length-1] - vetorForcaXrobo[0])*100)/100 + "N"
document.getElementById("ForcaYRobo").innerHTML = " Variação da força do robô, até o momento da interceptação, em Y: " + Math.round(parseFloat(vetorForcaYrobo[vetorForcaYrobo.length-1] - vetorForcaYrobo[0])*100)/100 + "N"
document.getElementById("ForcaXBola").innerHTML = " Variação da força da bola, até o momento da interceptação, em X: " + Math.round(parseFloat(vetorForcaXbola[vetorForcaXbola.length-1] - vetorForcaXbola[0])*100)/100 + "N"
document.getElementById("ForcaYBola").innerHTML = " Variação da força do bola, até o momento da interceptação, em Y: " + Math.round(parseFloat(vetorForcaYbola[vetorForcaYbola.length-1] - vetorForcaYbola[0])*100)/100 + "N"


const selec = (el) => document.querySelector(el);


const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");


overlay.classList.add("overlay--active");
;


overlay.classList.remove("overlay--active");
;
