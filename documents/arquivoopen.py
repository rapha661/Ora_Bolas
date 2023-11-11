arquivo = open('t.txt')
leitor = arquivo.read()
lista = []
lista2 = []
lista = leitor.split()
for line in lista:
    a = line.replace(',', '.')
    lista2.append(a)
print(lista2)
arquivo.close()