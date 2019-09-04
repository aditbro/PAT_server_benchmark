# Masukkan semua file c Anda
OBJS = main.c
CC = gcc
COMPILER_FLAGS = -w
LINKER_FLAGS = -levent
OBJ_NAME = c-server
all : 
	@echo 'Start building...'
	$(CC) $(OBJS) $(COMPILER_FLAGS) $(LINKER_FLAGS) -o $(OBJ_NAME)
	@echo "done.\n"
	@echo "start server by ./c-server <file_name.html>"