#!/bin/bash

if [[ ! -d ../../../../../public/documents ]]; then
	echo "No tienes directorio documents o no estás ejecutando este script "
	echo "desde application/third_party/Fixtures/fixtures/cliend_side."
fi

rm -rf ../../../../../public/documents/consultorio_*
mkdir -p ../../../../../public/documents/consultorio_{1,2,3}/paciente_{1,2,3}
chmod -R 777 ../../../../../public/documents/consultorio_*;

mkdir -p ../../../../../public/documents/temp
chmod -R 777 ../../../../../public/documents/temp
