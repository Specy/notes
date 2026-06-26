---
title: "Agenti Intelligenti"
description: "Definizione formale di agente intelligente, razionalità e framework PEAS; classificazione degli ambienti (osservabilità, determinismo, episodicità) e tipologie di agenti (riflessivi, basati su modello, orientati a obiettivi, basati sull'utilità, apprendenti)."
type: lecture
---
# Introduzione agli Agenti Intelligenti

Gli agenti intelligenti rappresentano una delle fondamenta principali dell'intelligenza artificiale moderna. Contrariamente ai sistemi tradizionali, che seguivano regole rigide e prestabilite, gli agenti intelligenti sono progettati per essere autonomi, flessibili e adattivi. Queste caratteristiche permettono loro di interagire con ambienti dinamici, altri agenti e, in alcuni casi, con esseri umani, per risolvere problemi complessi e raggiungere obiettivi specifici.

## Motivazione e Applicazioni

Gli agenti intelligenti sono utilizzati in numerosi contesti pratici:
- **Automazione**: come i robot nelle catene di montaggio.
- **Assistenti virtuali**: come chatbot e sistemi di risposta automatica.
- **Veicoli autonomi**: per navigare in ambienti complessi.
- **Sistemi di raccomandazione**: per suggerire contenuti personalizzati agli utenti.

Questi esempi dimostrano come gli agenti intelligenti siano capaci di sostituire o assistere gli esseri umani in compiti che richiedono decisioni rapide e precise.

---

## Definizione di Agente

Un agente è definito come un sistema capace di percepire l'ambiente in cui opera, tramite sensori, e di agire su di esso tramite attuatori. Questa definizione è volutamente generica per coprire una vasta gamma di esempi.

### Categorie di Agenti

1. **Agente umano**:
   - **Sensori**: occhi, orecchie, pelle (percezione visiva, uditiva, tattile).
   - **Attuatori**: mani, gambe, corde vocali.
2. **Agente robotico**:
   - **Sensori**: videocamere, rilevatori a infrarossi, microfoni.
   - **Attuatori**: motori, bracci meccanici.
3. **Agente software**:
   - **Sensori**: input da tastiera, mouse, o rete.
   - **Attuatori**: output su schermo, file o pacchetti di rete.

Ogni agente è progettato per operare in modo ottimale nel proprio contesto, utilizzando le sue capacità sensoriali e attuative per raggiungere obiettivi predefiniti.

---

## Ambiente degli Agenti

L'ambiente è l'insieme degli elementi con cui l'agente interagisce. Sebbene possa teoricamente includere l'intero universo, nella pratica si considera solo la porzione rilevante per l'agente.

### Caratteristiche dell'Ambiente

- **Osservabilità**: può essere completamente osservabile (l'agente percepisce tutte le informazioni rilevanti) o parzialmente osservabile (informazioni limitate o rumorose).
- **Agenti singoli vs. multipli**: l'ambiente può coinvolgere uno o più agenti. Ad esempio, un robot in una stanza è un caso singolo, mentre una partita a scacchi coinvolge due agenti.
- **Deterministico vs. non deterministico**: negli ambienti deterministici, ogni azione dell'agente produce un risultato prevedibile. Negli ambienti non deterministici, il risultato può variare (es., il traffico per un taxi autonomo).
- **Episodico vs. sequenziale**: in ambienti episodici, ogni azione è indipendente (es., classificazione di immagini). In ambienti sequenziali, le azioni influenzano gli stati futuri (es., navigazione robotica).
- **Statico vs. dinamico**: l'ambiente può cambiare mentre l'agente opera (es., il traffico).
- **Discreto vs. continuo**: gli stati e le azioni possono essere rappresentati da valori discreti (es., scacchi) o continui (es., sterzare un veicolo).
- **Conosciuto vs. sconosciuto**: l'agente può conoscere le regole dell'ambiente o doverle apprendere.

### Percept e Sequenza di Percept

Un "percept" è l'informazione raccolta dai sensori in un dato istante. La "sequenza di percept" rappresenta la storia completa di tutte le percezioni accumulate, che guida le decisioni dell'agente.

---

## Agenti Razionali

Un agente razionale è progettato per massimizzare una misura di performance definita in base agli obiettivi dell'agente.

### Concetto di Razionalità

La razionalità si basa sui seguenti principi:
- L'agente sceglie azioni che massimizzano le conseguenze desiderabili.
- Una misura di performance valuta il successo delle azioni.

### Esempio Pratico

Un robot aspirapolvere razionale:
- **Misura di performance**: massimizzare la pulizia delle stanze.
- **Problema**: una misura mal progettata potrebbe premiare comportamenti indesiderati, come risporcare per aumentare la pulizia successiva.
- **Soluzione**: progettare una misura che consideri il risultato finale (es., stanze costantemente pulite) e penalizzi consumi inutili.

---

## Progettazione degli Agenti: PEAS

La progettazione di un agente richiede l'analisi dei seguenti elementi:
- **Performance measure**: descrive ciò che l'agente deve massimizzare (es., tempo, sicurezza, efficienza).
- **Environment**: definisce il contesto operativo.
- **Actuators**: elenca le azioni che l'agente può compiere.
- **Sensors**: specifica le fonti di dati.

### Applicazione PEAS: Taxi Autonomo

- **Performance measure**: minimizzare il tempo di viaggio, garantendo comfort e sicurezza.
- **Environment**: strade, traffico, condizioni meteo.
- **Actuators**: sterzo, acceleratore, freni.
- **Sensors**: GPS, videocamere, radar.

---

## Funzione e Programma dell'Agente

La funzione dell'agente è una mappatura matematica da percezioni ad azioni. Il programma dell'agente è l'implementazione concreta di questa funzione, eseguito su un'architettura fisica.

### Architettura dell'Agente

L'architettura può variare:
- **PC tradizionale**: per agenti software.
- **Robot complessi**: con sensori e attuatori fisici.

Un agente è, quindi, l'insieme di programma e architettura:
**Agente = Programma + Architettura.**

---

## Tipologie di Agenti

Gli agenti possono essere classificati in base alla complessità dei loro comportamenti:
1. **Agenti a riflesso semplice**: reagiscono a percezioni correnti senza memoria. Es.: un'auto frena quando un ostacolo viene rilevato.
2. **Agenti basati su modello**: mantengono uno stato interno per comprendere il contesto. Es.: un'auto tiene traccia della posizione di altri veicoli.
3. **Agenti orientati a obiettivi**: scelgono azioni che conducono al raggiungimento di uno scopo. Es.: un taxi che pianifica il percorso più breve verso una destinazione.
4. **Agenti basati sull'utilità**: valutano le azioni in base a una funzione di utilità, massimizzando un criterio più sofisticato rispetto agli obiettivi.
5. **Agenti apprendenti**: migliorano le loro prestazioni attraverso l'esperienza, adattandosi a cambiamenti nell'ambiente.
