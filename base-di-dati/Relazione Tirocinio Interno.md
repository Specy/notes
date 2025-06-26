# Enrico Menichelli  mat. 279061

## Sommario

Il tirocinio ha riguardato la creazione di un editor web e interprete per sviluppare ed effettuare debugging di codice assembly M68K. Il progetto mira a facilitare l'apprendimento del linguaggio assembly M68K offrendo un ambiente di sviluppo accessibile, con funzioni di completamento automatico, gestione della memoria e debugging avanzato, superando le limitazioni di strumenti esistenti come Easy68K.

---
## Descrizione tecnica del progetto

La [webapp](https://asm-editor.specy.app/) è sviluppata con il framework Sveltekit per il frontend e un [interprete](https://github.com/Specy/s68k) in Rust compilato in WebAssembly, permette agli utenti di scrivere, eseguire e fare debug del codice M68K direttamente nel browser. 

---
## Caratteristiche dell'app

L'editor integra diverse funzionalità per rendere lo sviluppo assembly più intuitivo e interattivo:
- **Esecuzione e Debugging**: Consente di eseguire il codice, inserire breakpoints e procedere passo-passo per visualizzare l'effetto di ciascuna istruzione.
- **Visualizzazione dei Registri e della Memoria**: Permette di monitorare i cambiamenti nei registri e nella memoria con aggiornamenti in tempo reale, inclusi tooltips per conversioni in decimale/esadecimale e visualizzazione dello stack.
- **Gestione dei Progetti**: Supporta la creazione e gestione di progetti salvati localmente nel browser.
- **Documentazione Integrata**: Fornisce una documentazione interattiva sugli indirizzamenti, le istruzioni e gli esempi di utilizzo.

---
## Interprete M68K

L'interprete per M68K, scritto in Rust, offre un’analisi semantica del codice assembly per individuare eventuali errori e fornire suggerimenti all'utente. L'interprete è diviso in moduli per rendere la gestione del codice più modulare:
- **Lexer**: Riconosce le linee e gli operandi senza verifiche semantiche, per una maggiore flessibilità.
- **Checker Semantico**: Analizza la correttezza degli indirizzamenti e delle istruzioni, segnalando errori e suggerendo soluzioni.
- **Compilatore del Programma**: Prepara il codice per l'esecuzione.
- **Modulo di Esecuzione**: Permette di eseguire il codice interpretato e supporta il passo-passo e i breakpoints.

L'interprete include istruzioni aritmetiche, di confronto, salto, e bitwise, insieme ad alcune direttive come `equ`, `org`, `dc`, `ds` e `dcb`, offrendo un ambiente robusto per chi desidera apprendere o praticare la programmazione assembly.

---
## Link utili

- [repository interprete](https://github.com/Specy/s68k) 
- [repository webapp](https://github.com/Specy/asm-editor)
- [sito web](https://asm-editor.specy.app/)
- [esempio codice m68k](https://asm-editor.specy.app/projects/share?project=N4Igxg9gJgpiBcIDyAlA4gAixgJARgAYiAdAO2wwBsZSBzAFwAt4MowA6AdwwCYCyKAQwBOwlmy4Y8eADQYA7LN4A2OQBY16gKxzlOjAA5VUgnIDMxnsYPy5RuQE4H6g3PmnDzjMtcYHPdVtDflIAZQAVAEEUcPgBbAAqDABnCGF6DCYYDBFhQQBPeKwAWSQANQBRdkoMAGJcuQBaAApkgAcASiKMUsrJajomGRb2rvJsACNk4RS0+gB9XILuwSgoarrjdu6ktuEAS1IMrNn0mCgc0WXxkvKqmvrRJtbO7t6q7gGGRmGXsYopjM9ocFktCjcMBM8hgaFAyMlBPMIAAzZHzL5MGEARwArhgNPDESi0WD5m0ICCYDMYLj8cp4XNFld8nEIe9JFAPCNXmy7hsoEpuf9sOyalAAhghW8+WKzM9RtK+twoJpJX9FfdWPopby+jVBFz1brNYJBUaKKKchKdRaZawgjaRXbBMZHbclSkiaj0TRvn85FB5N0ALY4yjJOoSwMajYIpHe0nkynCf05emkGPcWoeTkYBL7DAAXgwIVtHuzAa0eeSnEEbQjxZCyLS83282S9BE9FZFDAwbaHKCnO6E1o2Wbwlb81hef2yOaBYAfMWMYwOhhaBB6BAMBOp7DM5GAzw8xgAFZFqSHwMBvCnmcr31MbrJHETDk5u-30gXRrF-bdHuZ7tp26Q9hQ2B9m0rBKOK3QAmOu4tsBM5YEkc7NBey4wj+66btu8xAdOP7wU6eppnIpqJJCMATjAFTUMGNAZMWYIYEmRxUqRWCrOsYoSlR1ETLRaT0YxzEYAA1MWZ7cSkb4bLUAlfmhNF0QxMBMUckrFngcmWi6lEnqpYA4qIzEaVpLGXHk+TsRSnHCHJvH8gJxkmWZwgWeJ2nSee+l8twzSmh0AZmKeUBzsil4JMJ6k+fQcmvu+QWCDwoWsOFEVRTpeameZRyWcxcn0B2mVyRMlAZHO7bBoIlDUDMp4YZFqIYAAPCWwoQRB7KpXgGUqqe9D9jFcWiUVRxyUIayKbBVZJDWdbJJJknTWRHwYMF6VyMFA2nrFIleZN1kJPlXmFQl63uptKq7Wl65JGdnneZpEnFiNbRyTVyR1Q1VLgT1LkPFGJ5JGeq0VdCREdl2gHIcRUCAzks0gwGBDNZDEJQoISGTm2sPpGQe5trCyOWn8kmUemZaapTAZBsaGz01aMY1Czpps1toxUzkpYbczPOVoeLMqlzotmOLQusDwUudLzAoi9Lw4QukyRkEkOLJDAyQsKwBDNJQ64Cs0nDG-Ipvrmlhvrl5tD7B2VIYMS2vWXgsukEk26djULswNZdsO-QTt+xkkkYF59BmeQunpm0Xpoqu2J4ngccJ0ytlkg5wfUrSeAGGQwJHBnBTk3anLyjytMcmaCpM8qDrmgL+rWk3N2SPH8aJ0+jCptGTM1J3xIl-kWfJqmaXEy2hPdlztRyvrIsPbeKyo0erMQvQeTQbUeBaHPxgq9XDwAOQyGfMHdFvdZ1HvV9lf3FDJXNDMjgweMgXDpB7mTcsdFTk967c3ljIR+AsgpC0VgPYB-9QH8ywGrMgZMQAyHAF5QQwcoCRHoAgPAih5A8C0EYNQBAeAGFcCAHEbQoAYPONg3B8gzAEAMPnMwZh5CMJ0CAUgggmIIBAKEOYKCQCUEEHQHEggxz8OKD4AA0sI2AyQwAHDaPQfYEBSD8OEcHDsYBBDa2SAgAA2gAXVQfsKA-D5jtkYCIGA1iQAAF8gA)
