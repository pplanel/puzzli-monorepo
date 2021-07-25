#!/bin/bash

function usage() {
    cat <<USAGE
forma de usar: $0 <pasta> <embryo-pessoal>
<pasta>
    pasta que deseja syncar
<nome-do-embryo>
    o nome remoto que vai compor a URL do Embryo
USAGE
}

FOLDER=$1
[ -z "$1" ] || [ -z "$2" ] && {
    usage
    exit 1
}

[ ! -d "$1" ] && {
    echo "FATAL: Pasta \"$1\" não existe..."
    exit 1
}
BASE_FOLDER="/home/www/embryo"
EMBRYO=$(echo "${2}" | tr '[:upper:]' '[:lower:]' | sed -E -e "s/([^a-zA-Z])+/-/g")

EMBRYO_DOMAIN="${EMBRYO}.embryo.octopusdate.com"

FULL_PATH="$BASE_FOLDER/$EMBRYO_DOMAIN/"

UPLOAD_TO="www@base.embryo.octopusdate.com:$FULL_PATH"

echo "-----------------------------"
echo "Joga-no-embryo 👊"
echo "-----------------------------"
echo ""
echo "Pasta local: $FOLDER"
echo "Subindo para: $UPLOAD_TO"
echo ""
echo "Aperte <ENTER> para iniciar cópia, nn?"
read -r
rsync -avz --delete "${FOLDER}/" "${UPLOAD_TO}"
echo ""
echo "-----------------------------"
echo "Seu embryo está disponivel em https://${EMBRYO_DOMAIN}"
echo "-----------------------------"