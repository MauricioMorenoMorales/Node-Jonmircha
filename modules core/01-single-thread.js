function singleThread(){
	process.argv[2] = 'Estamos aprendiendo Node.js'
	process.argv[3] = 19
	process.argv[4] = null
	process.argv[5] = true
	console.log('==========================================');
	console.log('           El Proceso De Node.js          ');
	console.log('Id del Proceso..............' + process.pid);
	console.log('Titulo......................' + process.title);
	console.log('Directorio de Node..........' + process.execPath);
	console.log('Directorio Actual...........' + process.cwd());
	console.log('Version de Node.............' + process.version);
	console.log('Versiones de Dependencias...' + process.versions);
	console.log('Plataforma (S.O.)...........' + process.platform);
	console.log('Arquitectura (S.O.).........' + process.arch);
	console.log('Tiempo activo de Node.......' + process.uptime());
	console.log('Argumentos del Proceso......' + process.argv);
	console.log('==========================================');

	for (let key in process.argv) {
		console.log(process.argv[key])
	}
	console.log(
		process.argv[0], //Ruta donde se ejecuta node
		process.argv[1] //ruta donde se ejkecuta el proceso actual
	)
}

singleThread()