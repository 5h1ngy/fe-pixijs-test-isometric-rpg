# fe-react-poc-nfs (Proof of concept, Network File System)

![](./docs/preview.png)

## 1.Guida all'Installazione e all'Avvio

#### Requisiti di Sistema

Prima di procedere con l'installazione e l'avvio del progetto, assicurati di avere installati i seguenti requisiti:

1. **Node.js:** È necessario Node.js installato sul tuo sistema. Puoi scaricarlo e installarlo da [nodejs.org](https://nodejs.org/).

#### Passaggi per l'Installazione

1. **Clonare il Repository:** Clona il repository del progetto sul tuo sistema locale utilizzando Git:
   
   ```bash
   git clone <URL_del_repository>
   ```

2. **Navigare nella Directory del Progetto:** Entra nella directory del progetto appena clonato:
   
   ```bash
   cd fe-react-poc-nfs
   ```

3. **Installare le Dipendenze:** Utilizza npm per installare tutte le dipendenze del progetto:
   
   ```bash
   yarn install
   ```

#### Avvio del Server di Sviluppo

Una volta completata l'installazione delle dipendenze, puoi avviare il server di sviluppo locale per eseguire l'applicazione. Assicurati di essere nella directory del progetto.

```bash
yarn start:dev
```

L'applicazione verrà avviata e sarà accessibile localmente tramite il browser all'indirizzo `http://localhost:3000`.

#### Creare una Build per la Produzione

Se desideri creare una build ottimizzata per la produzione, puoi eseguire il seguente comando:

```bash
yarn build:prod
```

Questo comando genererà una versione ottimizzata dell'applicazione pronta per essere distribuita.

#### Pulire il Progetto

Se necessario, puoi pulire il progetto eliminando i file generati durante l'installazione o la build:

```bash
npm run clean
```

Questo comando rimuoverà la cartella `node_modules`, `.yarn-cache`, `.vite`, e `dist`.

Seguendo questi passaggi, sarai in grado di installare correttamente il progetto sul tuo sistema locale, avviarlo in modalità di sviluppo e creare una build ottimizzata per la produzione. Assicurati di seguire attentamente i passaggi e di soddisfare tutti i requisiti di sistema necessari.

## 2.Documentazione Generale

### Obiettivo del Progetto e Contesto

Il progetto è un proof-of-concept di una tecnologia che replica il funzionamento di un network file system lato client, simile a Google Drive. L'obiettivo principale è sviluppare una toolchain ottimale per lo sviluppo e la produzione di applicazioni frontend, con particolare attenzione alla struttura modulare, alla gestione dello stato globale e all'utilizzo avanzato delle rotte dinamiche e del caricamento a runtime di codice React.

#### Funzionalità Principali del Progetto

1. **Sviluppo di una Toolchain Ottimale:**
   
   - Struttura modulare per facilitare lo sviluppo, la manutenzione e l'estensione del codice.
   - Configurazione per la produzione ottimizzata per prestazioni e dimensioni del bundle.
   - Utilizzo avanzato di tecnologie come React, Redux, React Router DOM e Chakra UI per garantire una migliore esperienza utente.

2. **Scaffolding per Progetti Medi:**
   
   - Fornitura di uno scaffolding preconfigurato per avviare rapidamente progetti di medie dimensioni.
   - Incapsulamento dello stato dei container modulari al livello globale per una gestione più efficiente dello stato dell'applicazione.

3. **Utilizzo di Rotte Dinamiche e Caricamento a Runtime:**
   
   - Implementazione di rotte dinamiche per consentire la navigazione fluida all'interno dell'applicazione.
   - Caricamento a runtime di codice React per ottimizzare i tempi di caricamento e migliorare le prestazioni complessive dell'applicazione.

4. **Sviluppo di Componenti Riutilizzabili:**
   
   - Utilizzo di Chakra UI per lo sviluppo di componenti atomici e riutilizzabili, garantendo una progettazione coerente e un'esperienza utente omogenea.

5. **Sviluppo di Container Modulari:**
   
   - Implementazione di container modulari, estendibili e riutilizzabili, per la gestione e la presentazione dei dati all'interno dell'applicazione.

#### Tecnologie Utilizzate e Motivazioni delle Scelte Fatte

- **React e React DOM:** Scelta di React come libreria principale per la costruzione dell'interfaccia utente, per la sua flessibilità e la sua vasta adozione nella comunità di sviluppatori.
- **Redux:** Utilizzo di Redux per la gestione dello stato globale dell'applicazione, facilitando la condivisione dei dati tra i componenti e migliorando la scalabilità del progetto.
- **React Router DOM:** Adozione di React Router DOM per gestire la navigazione all'interno dell'applicazione, sfruttando le sue capacità di gestione delle rotte dinamiche.
- **Chakra UI:** Scelta di Chakra UI per lo sviluppo di componenti UI consistenti e riutilizzabili, per una progettazione efficiente e una migliore esperienza utente.
- **Altre Tecnologie:** Utilizzo di altre librerie e strumenti come framer-motion per le animazioni e faker-js per la generazione di dati fittizi durante lo sviluppo.

La scelta di queste tecnologie è motivata dalla loro affidabilità, dalla loro popolarità nella comunità degli sviluppatori e dalla loro capacità di soddisfare i requisiti specifici del progetto.

## 3.Struttura del Codice Sorgente

Il progetto è strutturato seguendo un approccio modulare, che organizza il codice in diverse cartelle per facilitare la manutenzione e l'estensione del progetto. Ecco una panoramica della struttura del codice sorgente:

- **`app/public`:** Contiene i file statici accessibili pubblicamente, come immagini, font o altri asset.

- **`app/src`:** Questa è la cartella principale del codice sorgente dell'applicazione.
  
  - **`assets`:** Contiene risorse statiche utilizzate nell'applicazione, come file di configurazione o immagini.
    
    - **`config.jsonc`:** File di configurazione dell'applicazione, probabilmente contenente informazioni globali o opzioni di personalizzazione.
  
  - **`components`:** Contiene i componenti React riutilizzabili.
    
    - **`ActionBar`:** Un componente che fornisce un'azione per interagire con l'applicazione.
    - [...]
  
  - **`containers`:** Contiene i container modulari, che gestiscono lo stato e la logica di presentazione dei dati.
    
    - **`FileSystemNavigator`:** Un container che gestisce la visualizzazione e la navigazione dei file nel sistema di file.
  
  - **`hocs`:** Contiene gli Higher Order Components (HOC), che sono funzioni che prendono un componente e restituiscono un nuovo componente arricchito di funzionalità.
  
  - **`pages`:** Contiene le pagine principali dell'applicazione.
    
    - **`Dashboard`:** La pagina principale dell'applicazione, che può includere una dashboard con varie sezioni e funzionalità.
  
  - **`services`:** Contiene i servizi utilizzati dall'applicazione per comunicare con backend esterni o effettuare altre operazioni di rete.
    
    - **`NFS.js`:** Un servizio che implementa le operazioni del Network File System (NFS), probabilmente per recuperare o inviare dati dal/dal backend.
  
  - **`store`:** Contiene la configurazione dello stato globale dell'applicazione utilizzando Redux.
    
    - **`index.js`:** Il file principale per la configurazione dello store Redux.
    
    - **`pages`:** Contiene i reducers specifici delle pagine dell'applicazione.
    
    - **`containers`:** Contiene i reducers specifici dei container modulari.
  
  - **`main.jsx`:** Il file principale che avvia l'applicazione, importando e renderizzando il componente radice.
  
  - **`routes.jsx`:** Il file che definisce le rotte dell'applicazione, utilizzando React Router DOM per associare i percorsi URL ai componenti delle pagine.

### Guida alla Navigazione del Progetto

Per navigare all'interno del progetto, puoi seguire questa guida:

1. **Componenti Riutilizzabili:** I componenti riutilizzabili si trovano nella cartella `components`. Ogni componente è contenuto in una cartella separata e include i file `.jsx` per la definizione del componente, i file `.styles.jsx` per i CSS-in-JS (se utilizzati) e eventuali file di default delle props.

2. **Container Modulari:** I container modulari, che gestiscono la logica di stato e di presentazione dei dati, si trovano nella cartella `containers`. All'interno di ogni container, troverai i file per il componente React, i file di stile e eventualmente un file di configurazione (`container.js`) che definisce la logica del container.

3. **Servizi:** I servizi utilizzati per comunicare con backend esterni o per altre operazioni di rete si trovano nella cartella `services`.

4. **Store Redux:** La configurazione dello stato globale dell'applicazione utilizzando Redux è contenuta nella cartella `store`. All'interno di questa cartella, troverai i file per la configurazione dello store principale (`index.js`), i reducers specifici delle pagine e dei container modulari.

5. **Pagina Principale:** La pagina principale dell'applicazione, generalmente la dashboard, si trova nella cartella `pages/Dashboard`.

6. **Rotte:** Le rotte dell'applicazione sono definite nel file `routes.jsx`, dove vengono associati i percorsi URL ai componenti delle pagine utilizzando React Router DOM.

Navigare all'interno del progetto seguendo questa struttura ti permetterà di individuare rapidamente i diversi componenti, container e servizi utilizzati nell'applicazione.
