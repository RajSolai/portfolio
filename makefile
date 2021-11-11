# the CD makefile for integrating changes to 
# deployment

all: installtools installdeps upload

installtools:
	sudo apt install ncftp -y

installdeps:
	@echo 📦️ installing dependencies && \
 	yarn install

# target is the "solairaj.rf.gd"
upload:
	@echo "🥤️ uploading the files to server"
	ncftpput -R -v -u epiz_24158721 \
	-p $(pass) ftpupload.net \
	/htdocs \
	src/*
