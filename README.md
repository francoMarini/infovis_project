# Visualizzazione delle Informazioni - Progetto iniziale
Progetto iniziale di Visualizzazione delle Informazioni, svolto da **Franco Marini**, studente del corso di Laurea Magistrale in Ingegneria Informatica presso l'Università di Roma Tre.

## Specifica del progetto
"*Crea un file json con dei dati multivariati: ci sono 10 data-cases e ogni data-case ha tre variabili quantitative (i cui valori sono tutti positivi). In base a questi dati disegna 10 piccole balene (è sufficiente la silhouette) distribuite orizzontalmente nell'area di disegno. Ogni balena corrisponde ad un data-case e la sua coordinata y è ricavata dalla rispettiva variabile 1. Quando l'utente clicca con il pulsante sinistro del mouse su una balena tutte le balene si spostano ad una nuova profondità corrispondente alla variabile 2 del rispettivo data-case. Al terzo click viene utilizzata la terza variabile e al click successivo si ritorna ad utilizzare la prima variabile. Se però l'utente tiene premuto il tasto "r" mentre clicca, allora prima di assumere la nuova configurazione, le balene salgono in superficie come per respirare. 
Fai in modo che i cambi di profondità delle balene avvengano con un'animazione fluida. 
Usa le scale d3.js per mappare l'intervallo dei valori delle variabili (che è arbitrario) sull'intervallo dei valori delle coordinate, che dipende dalla tua interfaccia.*"


## Sviluppo in locale
Per visualizzare correttamente il progetto, è necessario creare un server locale sulla directory di lavoro. 
Una volta posizionati nella cartella corrente, eseguire da terminale il seguente comando:
```
python -m http.server 8080
```
Dopodiché è necessario aprire il browser e digitare:
```
http://localhost:8080
```

Nel caso in cui si preferisse utilizzare una *porta* diversa, bisogna modificare la *riga 88* all'interno del file *'js/main'* nel seguente modo:

```
url: 'http://localhost:PORTA/data/dataset.json',
```
sostituendo *'PORTA'* con il numero della porta che si vuole utilizzare.


## Versione utilizzata
La versione di **d3.js** utilizzata è la *v6*, la più recente al momento.

## Browser testati
Il progetto è stato testato e viene visualizzato correttamente sui seguenti browser:
- **Google Chrome**, Versione 91.0.4472.77 (Build ufficiale) (a 64 bit)
- **Microsoft Edge**, Versione 91.0.864.41 (Build ufficiale) (64 bit)

## Demo
