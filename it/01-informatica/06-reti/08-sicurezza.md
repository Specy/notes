---
title: "Sicurezza nelle reti: crittografia, TLS e IPSec"
description: "Crittografia simmetrica (DES, AES) e a chiave pubblica (RSA), autenticazione, firma digitale, TLS/SSL, VPN, IPSec, WEP/WPA3, sicurezza 4G e firewall/IDS."
type: lecture
---

Nelle reti si considera la sicurezza come:

- *riservatezza*: solo il mittente e destinatario devono capire il contenuto del messaggio.
- *autenticazione*: mittente e destinatario vogliono confermare la propria identità.
- *integrità del messaggio*: mittente e destinatario vogliono essere sicuri che il messaggio non sia stato alterato.
- *accesso e disponibilità*: i servizi devono essere accessibili e disponibili agli utenti

## Membri di una potenziale comunicazione non sicura

<svg viewBox="0 0 660 275" width="100%" style="max-width:660px;display:block;margin:1.5rem auto" role="img" aria-label="Alice (mittente sicuro) e Bob (ricevitore sicuro) si scambiano dati e messaggi di controllo su un canale; Trudy può intercettare e modificare ciò che passa sul canale" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118170900-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- Alice, Bob -->
<text x="95" y="28" font-size="18" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<text x="585" y="28" font-size="18" text-anchor="middle" fill="var(--palette-blue)">Bob</text>
<!-- dati in/out -->
<text x="40" y="136" font-size="18" text-anchor="middle">dati</text>
<line x1="62" y1="130" x2="128" y2="130" stroke="currentColor" stroke-width="1.8" marker-end="url(#i20241118170900-a)"/>
<line x1="540" y1="130" x2="600" y2="130" stroke="currentColor" stroke-width="1.8" marker-end="url(#i20241118170900-a)"/>
<text x="606" y="136" font-size="18">dati</text>
<!-- mittente / ricevitore -->
<rect x="130" y="92" width="110" height="76" fill="var(--palette-green)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="185" y="124.5" font-size="17" text-anchor="middle">mittente</text>
<text x="185" y="147.4" font-size="17" text-anchor="middle">sicuro</text>
<rect x="430" y="92" width="110" height="76" fill="var(--palette-green)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="485" y="124.5" font-size="17" text-anchor="middle">ricevitore</text>
<text x="485" y="147.4" font-size="17" text-anchor="middle">sicuro</text>
<!-- canale -->
<rect x="240" y="114" width="190" height="32" fill="var(--palette-red)" fill-opacity="0.45"/>
<line x1="250" y1="130" x2="420" y2="130" stroke="currentColor" stroke-width="3.5" marker-start="url(#i20241118170900-a)" marker-end="url(#i20241118170900-a)"/>
<!-- Trudy intercetta -->
<path d="M285 130 C318 130 328 142 328 236" fill="none" stroke="currentColor" stroke-width="3.5" marker-start="url(#i20241118170900-a)" marker-end="url(#i20241118170900-a)"/>
<path d="M385 130 C352 130 342 142 342 236" fill="none" stroke="currentColor" stroke-width="3.5" marker-start="url(#i20241118170900-a)" marker-end="url(#i20241118170900-a)"/>
<text x="335" y="262" font-size="18" text-anchor="middle" fill="var(--palette-blue)">Trudy</text>
<!-- etichette -->
<text x="215" y="68" font-size="17" text-anchor="middle">canale</text>
<line x1="235" y1="76" x2="262" y2="114" stroke="currentColor" stroke-width="1"/>
<text x="330" y="50" font-size="16">dati, messaggi</text>
<text x="330" y="72" font-size="16">di controllo</text>
<line x1="355" y1="80" x2="378" y2="127" stroke="currentColor" stroke-width="1"/>
</svg>

Usiamo:
- Alice e bob, come due utenti che comunicano fra di loro. Questi due utenti possono essere una qualsiasi entità che usa l'internet per comunicare, come client/server, dns, IOT, etc...
- Trudy, come il malintenzionato che vuole rompere la sicurezza della comunicazione fra Alice e Bob. Trudy può:
  - **origliare**: intercettare i messaggi
  - **Inserire** messaggi nella connessione
  - **Impersonare** gli indirizzi sorgente dei pacchetti per sembrare Alice o Bob
  - **DoS** impedire l'uso di un servizio da parte degli utenti, come per esempio sovraccaricando le risorse

# Crittografia

<svg viewBox="0 0 680 262" width="100%" style="max-width:680px;display:block;margin:1.5rem auto" role="img" aria-label="Alice cifra il testo in chiaro con la chiave K_A, il testo cifrato viaggia verso Bob che lo decifra con la chiave K_B; Trudy può intercettare il testo cifrato" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118171728-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- chiavi -->
<g transform="translate(170 20) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="205" y="72" font-size="24" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="7.2" font-size="16.8">A</tspan></text>
<text x="232" y="26" font-size="15">chiave di</text>
<text x="232" y="46" font-size="15">cifratura di</text>
<text x="232" y="66" font-size="15">Alice</text>
<line x1="212" y1="80" x2="212" y2="103" stroke="currentColor" stroke-width="1.8" marker-end="url(#i20241118171728-a)"/>
<g transform="translate(450 20) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="485" y="72" font-size="24" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="7.2" font-size="16.8">B</tspan></text>
<text x="512" y="26" font-size="15">chiave di</text>
<text x="512" y="46" font-size="15">decifratura</text>
<text x="512" y="66" font-size="15">di Bob</text>
<line x1="492" y1="80" x2="492" y2="103" stroke="currentColor" stroke-width="1.8" marker-end="url(#i20241118171728-a)"/>
<text x="90" y="80" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<text x="615" y="92" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Bob</text>
<!-- algoritmi -->
<rect x="150" y="105" width="125" height="70" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="212.5" y="134.8" font-size="16" text-anchor="middle">algoritmo di</text>
<text x="212.5" y="156.4" font-size="16" text-anchor="middle">cifratura</text>
<rect x="430" y="105" width="125" height="70" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="492.5" y="134.8" font-size="16" text-anchor="middle">algoritmo di</text>
<text x="492.5" y="156.4" font-size="16" text-anchor="middle">decifratura</text>
<!-- flusso -->
<text x="85" y="132" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo in chiaro</text>
<line x1="40" y1="145" x2="148" y2="145" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118171728-a)"/>
<text x="352" y="132" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo cifrato</text>
<line x1="275" y1="145" x2="428" y2="145" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118171728-a)"/>
<text x="615" y="132" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo in chiaro</text>
<line x1="555" y1="145" x2="620" y2="145" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118171728-a)"/>
<!-- Trudy -->
<path d="M318 149 C343 149 345 160 345 228" fill="none" stroke="currentColor" stroke-width="1.2" marker-start="url(#i20241118171728-a)" marker-end="url(#i20241118171728-a)"/>
<path d="M386 149 C361 149 359 160 359 228" fill="none" stroke="currentColor" stroke-width="1.2" marker-start="url(#i20241118171728-a)" marker-end="url(#i20241118171728-a)"/>
<text x="352" y="252" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Trudy</text>
</svg>

- $m$ è il messaggio in chiaro
- $K_A(M)$ è il messaggio cifrato con chiave $K_A$ 
- $m = K_B(K_A(m))$ 

Per poter violare questo schema di cifratura, Trudy dovrebbe provare tutte le possibili chiavi di cifratura tramite brute force, o indovinare la chiave tramite metodi statistici 

## Crittografia a chiave simmetrica 

<svg viewBox="0 0 660 180" width="100%" style="max-width:660px;display:block;margin:1.5rem auto" role="img" aria-label="Crittografia simmetrica: Alice cifra il testo in chiaro m con la chiave K_S ottenendo K_S(m); Bob lo decifra con la stessa chiave K_S ottenendo m = K_S(K_S(m))" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118172017-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- chiavi simmetriche -->
<text x="208" y="58" font-size="24" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="7.2" font-size="16.8">S</tspan></text>
<g transform="translate(230 30) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="212" y1="66" x2="212" y2="93" stroke="currentColor" stroke-width="1.8" marker-end="url(#i20241118172017-a)"/>
<text x="458" y="58" font-size="24" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="7.2" font-size="16.8">S</tspan></text>
<g transform="translate(480 30) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="462" y1="66" x2="462" y2="93" stroke="currentColor" stroke-width="1.8" marker-end="url(#i20241118172017-a)"/>
<text x="110" y="60" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<text x="610" y="72" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Bob</text>
<!-- algoritmi -->
<rect x="150" y="95" width="125" height="70" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="212.5" y="124.8" font-size="16" text-anchor="middle">algoritmo di</text>
<text x="212.5" y="146.4" font-size="16" text-anchor="middle">cifratura</text>
<rect x="400" y="95" width="125" height="70" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="462.5" y="124.8" font-size="16" text-anchor="middle">algoritmo di</text>
<text x="462.5" y="146.4" font-size="16" text-anchor="middle">decifratura</text>
<!-- flusso -->
<text x="55" y="120" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo in</text>
<text x="55" y="152" font-size="16" text-anchor="middle" fill="var(--palette-red)">chiaro, m</text>
<line x1="90" y1="130" x2="148" y2="130" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118172017-a)"/>
<text x="338" y="120" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo cifrato</text>
<line x1="275" y1="130" x2="398" y2="130" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118172017-a)"/>
<text x="338" y="162" font-size="16" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="4.8" font-size="11.2">S</tspan><tspan dy="-4.8">(m)</tspan></text>
<text x="590" y="120" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo in chiaro</text>
<line x1="525" y1="130" x2="590" y2="130" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118172017-a)"/>
<text x="590" y="162" font-size="16" text-anchor="middle" fill="var(--palette-red)">m = K<tspan dy="4.8" font-size="11.2">S</tspan><tspan dy="-4.8">(K</tspan><tspan dy="4.8" font-size="11.2">S</tspan><tspan dy="-4.8">(m))</tspan></text>
</svg>

è uno schema di cifratura molto semplice, sia Bob che Alice condividono la stessa chiave $K_S$.
Questa chiave può essere utilizzata in vari modi in algoritmi di cifratura. 

C'è un problema, come si fa a condividere questa chiave in maniera sicura?

## DES: Data Encryption Standard

é uno standard di cifratura che usa una chiave simmetrica a 56bit per input in chiaro a 64bit. Il DES è stato sconfitto tramite brute force tramite cluster di computer.

Esegue 16 round di cifratura, ognuno dei quali esegue una permutazione e una sostituzione dei bit del messaggio in chiaro tramite una chiave di cifratura.

## AES: Advanced Encryption Standard

é uno standard di cifratura che usa una chiave simmetrica a 128, 192 o 256 bit. L'AES è molto più sicuro del DES, e viene usato in molte applicazioni. è quasi impossible battere AES tramite brute force dato che impiegherebbe troppo tempo.

## Crittografia a chiave pubblica

Torniamo al problema di come condividere la chiave simmetrica in maniera sicura. La crittografia a chiave pubblica risolve questo problema. In questo schema, ogni utente ha due chiavi:
- una chiave pubblica, che può essere condivisa con chiunque, ed è pubblicamente disponibile a tutti
- una chiave privata, che è segreta e conosciuta solo all'utente

<svg viewBox="0 0 700 296" width="100%" style="max-width:700px;display:block;margin:1.5rem auto" role="img" aria-label="Crittografia a chiave pubblica: Alice cifra il messaggio m con la chiave pubblica di Bob K_B+; Bob decifra con la propria chiave privata K_B−, ottenendo m = K_B−(K_B+(m))" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118173155-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- chiavi di Bob -->
<g transform="translate(512 34) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="555" y="40" font-size="22" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="-9.2" font-size="15.4">+</tspan><tspan dx="-9.2" dy="15.8" font-size="15.4">B</tspan></text>
<text x="590" y="30" font-size="15">chiave <tspan font-style="italic" text-decoration="underline" fill="var(--palette-red)">pubblica</tspan></text>
<text x="590" y="50" font-size="15">di Bob</text>
<path d="M505 34 H255 V198" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" marker-end="url(#i20241118173155-a)"/>
<g transform="translate(512 98) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="555" y="104" font-size="22" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="-9.2" font-size="15.4">−</tspan><tspan dx="-9.2" dy="15.8" font-size="15.4">B</tspan></text>
<text x="590" y="94" font-size="15">chiave <tspan font-style="italic" text-decoration="underline" fill="var(--palette-red)">privata</tspan></text>
<text x="590" y="114" font-size="15">di Bob</text>
<path d="M505 98 H475 V198" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" marker-end="url(#i20241118173155-a)"/>
<text x="215" y="185" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<text x="510" y="185" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Bob</text>
<!-- algoritmi -->
<rect x="170" y="200" width="125" height="66" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="232.5" y="227.8" font-size="16" text-anchor="middle">algoritmo di</text>
<text x="232.5" y="249.4" font-size="16" text-anchor="middle">cifratura</text>
<rect x="420" y="200" width="125" height="66" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="482.5" y="227.8" font-size="16" text-anchor="middle">algoritmo di</text>
<text x="482.5" y="249.4" font-size="16" text-anchor="middle">decifratura</text>
<!-- flusso -->
<text x="75" y="226" font-size="16" text-anchor="middle" fill="var(--palette-red)">messaggio</text>
<text x="75" y="252" font-size="16" text-anchor="middle" fill="var(--palette-red)">in chiaro, m</text>
<line x1="125" y1="236" x2="168" y2="236" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118173155-a)"/>
<text x="357" y="226" font-size="16" text-anchor="middle" fill="var(--palette-red)">testo cifrato</text>
<line x1="295" y1="236" x2="418" y2="236" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118173155-a)"/>
<text x="357" y="262" font-size="16" text-anchor="middle" fill="var(--palette-red)">K<tspan dy="-6.7" font-size="11.2">+</tspan><tspan dx="-6.7" dy="11.5" font-size="11.2">B</tspan><tspan dy="-4.8">(m)</tspan></text>
<text x="552" y="226" font-size="16" fill="var(--palette-red)">messaggio</text>
<line x1="545" y1="236" x2="610" y2="236" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118173155-a)"/>
<text x="552" y="256" font-size="16" fill="var(--palette-red)">in chiaro</text>
<text x="552" y="284" font-size="16" fill="var(--palette-red)">m = K<tspan dy="-6.7" font-size="11.2">−</tspan><tspan dx="-6.7" dy="11.5" font-size="11.2">B</tspan><tspan dy="-4.8">(K</tspan><tspan dy="-6.7" font-size="11.2">+</tspan><tspan dx="-6.7" dy="11.5" font-size="11.2">B</tspan><tspan dy="-4.8">(m))</tspan></text>
</svg>

Abbiamo bisogno di $K_B^+$ e $K_B^-$ tale che $K_B^+(K_A^-(m)) = m$, e che non sia possibile che tramite la chiave pubblica $K_B^+$ si possa risalire alla chiave privata $K_B^-$

## Aritmetica modulare

$x \mod n$ è il resto della divisione di $x$ per $n$. Se $x = nq + r$, allora $x \mod n = r$, alcune proprietà dell'aritmetica modulare sono:
- $[(a \mod n) + (b \mod n)] \mod n = (a + b) \mod n$
- $[(a \mod n) - (b \mod n)] \mod n = (a - b) \mod n$
- $[(a \mod n) \cdot (b \mod n)] \mod n = (a \cdot b) \mod n$
- $[(a \mod n)^d] \mod n = (a^d) \mod n$

## RSA: Rivest-Shamir-Adleman

Si ha una sequenza di bit come messaggio, rappresentata da un numero intero, allora:
1. Scelgo due numeri primi $p$ e $q$ molto grandi (esempio da 1024 bit)
2. Calcola $n = p \cdot q$ e $z = (p-1)(q-1)$
3. Scegliamo $e$ tale che $1 < e < n$ in maniera che $e$ e $z$ siano coprimi tra loro (cioè non abbiano divisori in comune)
4. Calcoliamo $d$ tale che $d \cdot e \mod z = 1$, cioè che $e \cdot d - 1$ sia divisibile per $z$
5. La chiave pubblica è $K^+ = (n, e)$ e la chiave privata è $K^- = (n, d)$

A questo punto per cifrare un messaggio $m$ con la chiave pubblica $K^+ = (n, e)$, si calcola $c = m^e \mod n$. Per decifrare il messaggio si calcola $m = c^d \mod n$.
E quindi che:
$$m = c^d \ mod \ n = (m^e \ mod \ n)^d \ mod \ n$$

In oltre, applicando prima la chiave pubblica e poi la chiave privata, o viceversa, si ottiene lo stesso risultato. cioè che
$$
  K_B^-(K_B^+(m)) = m = K_B^+(K_B^-(m))
$$

L'algoritmo è sicuro perchè per poterlo sconfiggere, dovremmo trovare i due fattori $p$ e $q$, che essendo molto grandi, è molto difficile da fare.

## RSA: esempio

Bob sceglie $p = 5$ e $q = 7$, allora $n = 35$ e $z = 24$. Sceglie $e = 5$ e $d = 29$.

| | bit pattern | $m$ | $m^e$ | $c = m^e \bmod n$ |
|---|---|---|---|---|
| *cifratura:* | 00001100 | 12 | 248832 | 17 |

| | $c$ | $c^d$ | $m = c^d \bmod n$ |
|---|---|---|---|
| *decifratura:* | 17 | 481968572106750915091411825223071697 | 12 |

## Limitazioni di RSA

L'esponenziazione di RSA è computazionalmente molto pesante, infatti DES è almeno 100 volte più veloce di RSA.

Per questo motivo, si usa RSA per scambiare una chiave simmetrica, e poi si usa la chiave simmetrica (chiamata di sessione) per cifrare il messaggio con DES.

## Autenticazione

Si vuole provare che il messaggio sia statto effettivamente inviato da chi dice di averlo inviato.

In assenza di autenticazione, un malintenzionato potrebbe impersonare un utente e inviare messaggi in suo nome.

Ci sono molti approcchi che non funzionano:
- **IP address**: Non si può usare l'indirizzo IP per autenticare un utente, dato che l'indirizzo IP può essere facilmente falsificato
- **Identificativo**: non si può usare l'identificativo dell'utente, dato che può essere usato anche dal malintenzionato per impersonare l'utente
- **Password**: non si può usare una password, dato che può essere intercettata dal malintenzionato e memorizzata, e poi usata per impersonare l'utente tramite "playback attack" che riutilizza il pacchetto contenente la password per impersonare l'utente. Anche se la password è cifrata, il malintenzionato non ha bisogno di decifrarla, può semplicemente inviare il pacchetto cifrato.

Vogliamo evitare l'attacco playback, allora il mittente invia un numero $R$ chiamato nonce (number used once), il destinatario dovrà rispondere al mittente con $R$ cifrato tramite una chiave segreta condivisa tra i due, dimostrando che conosce la chiave segreta, e quindi che è effettivamente il destinatario.

Come visto precedentemente, possiamo usare la tecnica di chiave pubblica-privata per scambiare la chiave segreta, e poi usare la chiave segreta per autenticare il mittente. Cioè che:

<svg viewBox="0 0 670 270" width="100%" style="max-width:670px;display:block;margin:1.5rem auto" role="img" aria-label="Autenticazione con nonce e chiave pubblica: Alice dice Sono Alice, Bob invia il nonce R, Alice risponde con K_A−(R), Bob chiede la chiave pubblica e Alice invia K_A+; Bob verifica che K_A+(K_A−(R)) = R" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118180708-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<text x="55" y="108" font-size="18" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<text x="440" y="80" font-size="18" fill="var(--palette-blue)">Bob</text>
<!-- messaggi -->
<line x1="85" y1="40" x2="430" y2="64" stroke="currentColor" stroke-width="3" marker-end="url(#i20241118180708-a)"/>
<text x="235" y="34" font-size="18" text-anchor="middle">“Sono Alice”</text>
<line x1="430" y1="82" x2="85" y2="106" stroke="currentColor" stroke-width="3" marker-end="url(#i20241118180708-a)"/>
<text x="160" y="86" font-size="18" text-anchor="middle">R</text>
<line x1="85" y1="126" x2="430" y2="152" stroke="currentColor" stroke-width="3" marker-end="url(#i20241118180708-a)"/>
<text x="330" y="128" font-size="18" text-anchor="middle">K<tspan dy="-7.6" font-size="12.6">−</tspan><tspan dx="-7.6" dy="13" font-size="12.6">A</tspan><tspan dy="-5.4">(R)</tspan></text>
<line x1="430" y1="170" x2="85" y2="194" stroke="currentColor" stroke-width="3" marker-end="url(#i20241118180708-a)"/>
<text x="210" y="205" font-size="14" text-anchor="middle">“mandami la tua</text>
<text x="210" y="223" font-size="14" text-anchor="middle">chiave pubblica”</text>
<line x1="85" y1="232" x2="430" y2="258" stroke="currentColor" stroke-width="3" marker-end="url(#i20241118180708-a)"/>
<text x="330" y="234" font-size="18" text-anchor="middle">K<tspan dy="-7.6" font-size="12.6">+</tspan><tspan dx="-7.6" dy="13" font-size="12.6">A</tspan></text>
<!-- calcolo di Bob -->
<text x="578" y="60" font-size="16" text-anchor="middle">Bob calcola</text>
<text x="578" y="96" font-size="19" text-anchor="middle">K<tspan dy="-8" font-size="13.3">+</tspan><tspan dx="-8" dy="13.7" font-size="13.3">A</tspan><tspan dy="-5.7">(K</tspan><tspan dy="-8" font-size="13.3">−</tspan><tspan dx="-8" dy="13.7" font-size="13.3">A</tspan><tspan dy="-5.7">(R)) = R</tspan></text>
<text x="578" y="134" font-size="16" text-anchor="middle">e sa che solo Alice può</text>
<text x="578" y="158" font-size="16" text-anchor="middle">avere la chiave privata,</text>
<text x="578" y="182" font-size="16" text-anchor="middle">che cifra R in modo che</text>
<text x="578" y="226" font-size="19" text-anchor="middle">K<tspan dy="-8" font-size="13.3">+</tspan><tspan dx="-8" dy="13.7" font-size="13.3">A</tspan><tspan dy="-5.7">(K</tspan><tspan dy="-8" font-size="13.3">−</tspan><tspan dx="-8" dy="13.7" font-size="13.3">A</tspan><tspan dy="-5.7">(R)) = R</tspan></text>
</svg>

Questa tecnica è comunque vulnerabile ad un attacco **MITM** dove il malintenzionato si pone in mezzo alla comunicazione fra destinatario e mittente, intercettando e inoltrando i messaggi scamabiati con il destinatario. Questo attacco è difficile da rilevare, dato che per mittente e destinatario, la comunicazione sembra essere andata a buon fine.

### Firma digitale

Il mittente vuole inviare un messaggio $m$, allora lo firma usando la propria chiave privata, generando il messaggio $K_B^-(m)$, a questo punto invia il messaggio $m$ e la firma $K_B^-(m)$ al destinatario. Il destinatario verifica che il messaggio e la firma combacino usando la chiave pubblica del mittente, cioè che $K_B^+(K_B^-(m)) = m$, che è valido solo se chi ha firmato il messaggio conosce la chiave privata.
Questo garantisce anche la non ripudiabilità del messaggio, cioè che il mittente non può negare di aver inviato il messaggio.

Anzichè firmare l'intero messaggio, si può firmare un digest del messaggio, cioè applicando una funzione di hash al messaggio e firmando il digest. In questo modo si riduce la quantità di dati da firmare e inviare.

### MD5

è una funzione di hash che prende un messaggio di lunghezza arbitraria e restituisce un digest di 128 bit.

## Certificazione della chiave pubblica

La falla precedente dell'attacco MITM è dovuta al fatto che durante la comunicazione di $R$ e lo scambio della chiave pubblica, il malintenzionato può intercettare $R$ e criptarlo con la propria chiave pubblica, per poi rinviarlo al mittente, ponendosi come il destinatario. Stessa cosa farà con la chiave pubblica del destinatario, inviando la propria chiave pubblica al mittente. A questo punto il malintenzionato può intercettare i messaggi scambiati fra mittente e destinatario, e inoltrarli al destinatario e mittente rispettivamente, facendo credere a entrambi che la comunicazione sia andata a buon fine.

Per evitare questo, ci deve essere un ente fidato chiamato **Certification Authority (CA)**. Un utente $E$ di internet registra la propria chiave pubblica $K_B^+$ presso la CA, fornendo una prova di identità. A questo punto la CA crea un certificato contenente la garanzia che "$K_B^+$ appartiene a $E$". Il certificato è firmato dalla CA con la chiave privata della CA. Il mittente può verificare il certificato usando la chiave pubblica della CA, e quindi può essere sicuro che la chiave pubblica del destinatario è effettivamente quella del destinatario.

<svg viewBox="0 0 680 192" width="100%" style="max-width:680px;display:block;margin:1.5rem auto" role="img" aria-label="Certificazione: la CA riceve la chiave pubblica di Bob K_B+ e le informazioni che lo identificano, e firma digitalmente la chiave con la propria chiave privata K_CA−, producendo il certificato della chiave pubblica di Bob firmato dalla CA" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118182843-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- chiave pubblica di Bob -->
<text x="130" y="24" font-size="15" text-anchor="end">Bob’s</text>
<text x="130" y="46" font-size="15" text-anchor="end">public</text>
<text x="130" y="68" font-size="15" text-anchor="end">key</text>
<g transform="translate(152 22) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="142" y="70" font-size="22" fill="var(--palette-red)">K<tspan dy="-9.2" font-size="15.4">+</tspan><tspan dx="-9.2" dy="15.8" font-size="15.4">B</tspan></text>
<line x1="178" y1="22" x2="338" y2="22" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118182843-a)"/>
<line x1="185" y1="38" x2="250" y2="85" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2 5" marker-end="url(#i20241118182843-a)"/>
<!-- informazioni di Bob -->
<text x="130" y="140" font-size="15" text-anchor="end">Bob’s</text>
<text x="130" y="162" font-size="15" text-anchor="end">identifying</text>
<text x="130" y="184" font-size="15" text-anchor="end">information</text>
<line x1="150" y1="150" x2="248" y2="118" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2 5" marker-end="url(#i20241118182843-a)"/>
<!-- CA -->
<g fill="var(--palette-muted)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.2"><path d="M262 90 L302 68 L342 90 Z"/><rect x="262" y="90" width="80" height="4"/><rect x="272" y="94" width="6" height="30"/><rect x="286" y="94" width="6" height="30"/><rect x="300" y="94" width="6" height="30"/><rect x="314" y="94" width="6" height="30"/><rect x="328" y="94" width="6" height="30"/><rect x="258" y="124" width="88" height="6"/></g>
<text x="302" y="154" font-size="15" text-anchor="middle">CA</text>
<!-- firma digitale -->
<rect x="340" y="2" width="125" height="82" fill="var(--palette-green)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="402.5" y="27" font-size="16" text-anchor="middle">digital</text>
<text x="402.5" y="48.6" font-size="16" text-anchor="middle">signature</text>
<text x="402.5" y="70.2" font-size="16" text-anchor="middle">(encrypt)</text>
<text x="380" y="122" font-size="15" text-anchor="end">CA</text>
<text x="380" y="144" font-size="15" text-anchor="end">private</text>
<text x="380" y="166" font-size="15" text-anchor="end">key</text>
<line x1="400" y1="124" x2="400" y2="88" stroke="currentColor" stroke-width="2.5" stroke-dasharray="2 5" marker-end="url(#i20241118182843-a)"/>
<g transform="translate(420 114) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="388" y="168" font-size="22" fill="var(--palette-red)">K<tspan dy="-9.2" font-size="15.4">−</tspan><tspan dx="-9.2" dy="15.8" font-size="15.4">CA</tspan></text>
<!-- certificato -->
<line x1="465" y1="22" x2="560" y2="22" stroke="currentColor" stroke-width="2" marker-end="url(#i20241118182843-a)"/>
<path d="M565 4 H625 L640 19 V100 H565 Z M625 4 V19 H640" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="588" y="46" font-size="20" fill="var(--palette-red)">K<tspan dy="-8.4" font-size="14">+</tspan><tspan dx="-8.4" dy="14.4" font-size="14">B</tspan></text>
<g transform="translate(585 72) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="612" y="90" font-size="11">CA</text>
<text x="670" y="132" font-size="16" text-anchor="end">certificate for</text>
<text x="670" y="156" font-size="16" text-anchor="end">Bob’s public key,</text>
<text x="670" y="180" font-size="16" text-anchor="end">signed by CA</text>
</svg>

A questo punto quando un utente vuole comunicare con un altro, può richiedere il certificato del destinatario alla CA, ed usarla per verificare la chiave pubblica del destinatario.

## Email sicure

<svg viewBox="0 0 700 285" width="100%" style="max-width:700px;display:block;margin:1.5rem auto" role="img" aria-label="Riservatezza della posta: Alice cifra m con la chiave di sessione K_S e cifra K_S con la chiave pubblica di Bob K_B+, poi invia entrambi su Internet; Bob ricava K_S con K_B− e poi decifra m" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118183013-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- Alice: m cifrato con K_S -->
<text x="55" y="80" font-size="18" text-anchor="end">m</text>
<line x1="62" y1="75" x2="118" y2="75" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<rect x="120" y="56" width="75" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="157.5" y="80.2" font-size="15" text-anchor="middle">K<tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="150" y="18" font-size="15" text-anchor="middle">K<tspan dy="4.5" font-size="10.5">S</tspan></text>
<g transform="translate(170 13) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="157" y1="24" x2="157" y2="54" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183013-a)"/>
<path d="M195 75 H245 V121" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<text x="202" y="66" font-size="15">K<tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">(m)</tspan></text>
<!-- Alice: K_S cifrata con K_B+ -->
<text x="80" y="201" font-size="17" text-anchor="end">K<tspan dy="5.1" font-size="11.9">S</tspan></text>
<line x1="86" y1="195" x2="118" y2="195" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<rect x="120" y="176" width="75" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="157.5" y="200.2" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="150" y="272" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan></text>
<g transform="translate(172 266) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="157" y1="257" x2="157" y2="216" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183013-a)"/>
<path d="M195 195 H245 V149" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<text x="200" y="230" font-size="15">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan><tspan dy="-4.5">(K</tspan><tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">)</tspan></text>
<circle cx="245" cy="135" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="245" y="141" font-size="18" text-anchor="middle" font-weight="bold">+</text>
<text x="40" y="140" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<!-- Internet -->
<line x1="257" y1="135" x2="298" y2="135" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<path d="M312 160 C292 160 294 131 310 129 C304 110 336 104 348 114 C360 102 410 108 408 120 C428 118 428 156 410 160 Z" fill="var(--palette-teal)" fill-opacity="0.3" stroke="var(--palette-teal)" stroke-width="1.2"/>
<text x="360" y="141" font-size="16" text-anchor="middle">Internet</text>
<line x1="422" y1="135" x2="456" y2="135" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<circle cx="470" cy="135" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="470" y="141" font-size="18" text-anchor="middle" font-weight="bold">−</text>
<!-- Bob: recupera K_S con K_B-, poi m -->
<path d="M470 123 V75 H528" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<text x="478" y="66" font-size="15">K<tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">(m)</tspan></text>
<rect x="530" y="56" width="75" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="567.5" y="80.2" font-size="15" text-anchor="middle">K<tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">( · )</tspan></text>
<line x1="605" y1="75" x2="645" y2="75" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<text x="652" y="81" font-size="18">m</text>
<path d="M470 147 V195 H528" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183013-a)"/>
<text x="475" y="230" font-size="15">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan><tspan dy="-4.5">(K</tspan><tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">)</tspan></text>
<rect x="530" y="176" width="75" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="567.5" y="200.2" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan><tspan dy="-4.5">( · )</tspan></text>
<line x1="567" y1="174" x2="567" y2="96" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183013-a)"/>
<text x="574" y="142" font-size="15">K<tspan dy="4.5" font-size="10.5">S</tspan></text>
<g transform="translate(600 136) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="560" y="272" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan></text>
<g transform="translate(582 266) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="567" y1="257" x2="567" y2="216" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183013-a)"/>
<text x="665" y="140" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Bob</text>
</svg>

Il mittente:
- Genera una chiave simmetrica $K_S$
- Cifra il messaggio con $K_S$
- Cifra $K_S$ con la chiave pubblica del destinatario
- Invia il messaggio cifrato e la chiave cifrata al destinatario
- Il destinatario usa la propria chiave privata per decifrare $K_S$
- Il destinatario usa $K_S$ per decifrare il messaggio

<svg viewBox="0 0 735 245" width="100%" style="max-width:735px;display:block;margin:1.5rem auto" role="img" aria-label="Firma digitale: Alice calcola H(m), lo cifra con la propria chiave privata K_A− e invia K_A−(H(m)) insieme a m; Bob decifra la firma con K_A+, calcola H(m) e confronta i due valori" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118183214-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- Alice: firma dell'hash -->
<text x="45" y="82" font-size="18" text-anchor="end">m</text>
<line x1="50" y1="77" x2="68" y2="77" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<rect x="70" y="58" width="62" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="101" y="82.2" font-size="15" text-anchor="middle">H( · )</text>
<line x1="132" y1="77" x2="140" y2="77" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<rect x="142" y="58" width="62" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="173" y="82.2" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="165" y="20" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan></text>
<g transform="translate(186 14) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="173" y1="26" x2="173" y2="56" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183214-a)"/>
<path d="M204 77 H245 V121" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<text x="208" y="66" font-size="15">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan><tspan dy="-4.5">(H(m))</tspan></text>
<text x="45" y="220" font-size="18" text-anchor="end">m</text>
<path d="M52 214 H245 V149" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<circle cx="245" cy="135" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="245" y="141" font-size="18" text-anchor="middle" font-weight="bold">+</text>
<text x="40" y="145" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<!-- Internet -->
<line x1="257" y1="135" x2="298" y2="135" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<path d="M312 160 C292 160 294 131 310 129 C304 110 336 104 348 114 C360 102 410 108 408 120 C428 118 428 156 410 160 Z" fill="var(--palette-teal)" fill-opacity="0.3" stroke="var(--palette-teal)" stroke-width="1.2"/>
<text x="360" y="141" font-size="16" text-anchor="middle">Internet</text>
<line x1="422" y1="135" x2="456" y2="135" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<circle cx="470" cy="135" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="470" y="141" font-size="18" text-anchor="middle" font-weight="bold">−</text>
<!-- Bob: verifica -->
<path d="M470 123 V77 H528" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<text x="458" y="66" font-size="15">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan><tspan dy="-4.5">(H(m))</tspan></text>
<rect x="530" y="58" width="66" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="563" y="82.2" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="555" y="20" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan></text>
<g transform="translate(576 14) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="563" y1="26" x2="563" y2="56" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183214-a)"/>
<path d="M596 77 H640 V118" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<text x="648" y="72" font-size="15">H(m)</text>
<path d="M470 147 V214 H528" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<text x="480" y="236" font-size="18">m</text>
<rect x="530" y="195" width="66" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="563" y="219.2" font-size="15" text-anchor="middle">H( · )</text>
<path d="M596 214 H640 V152" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183214-a)"/>
<text x="648" y="230" font-size="15">H(m)</text>
<text x="640" y="141" font-size="16" text-anchor="middle" fill="var(--palette-red)">confronto</text>
<text x="700" y="141" font-size="17" fill="var(--palette-blue)">Bob</text>
</svg>

Possiamo aggiungere la firma digitale al messaggio. Il mittente può firmare il messaggio con la propria chiave privata, e il destinatario può verificare la firma con la chiave pubblica del mittente

<svg viewBox="0 0 630 345" width="100%" style="max-width:630px;display:block;margin:1.5rem auto" role="img" aria-label="Schema PGP lato Alice: m viene firmato calcolando H(m) e cifrandolo con K_A−; firma e m vengono uniti e cifrati con la chiave di sessione K_S; K_S viene cifrata con la chiave pubblica di Bob K_B+; i due risultati vengono uniti e inviati su Internet" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118183239-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- firma: m -> H -> K_A- -->
<text x="55" y="92" font-size="18" text-anchor="end">m</text>
<line x1="60" y1="86" x2="78" y2="86" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<rect x="80" y="67" width="62" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="111" y="91.2" font-size="15" text-anchor="middle">H( · )</text>
<line x1="142" y1="86" x2="150" y2="86" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<rect x="152" y="67" width="62" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="183" y="91.2" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="175" y="22" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan></text>
<g transform="translate(196 16) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="183" y1="30" x2="183" y2="65" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183239-a)"/>
<path d="M214 86 H245 V136" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<text x="220" y="74" font-size="15">K<tspan dy="-6.3" font-size="10.5">−</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">A</tspan><tspan dy="-4.5">(H(m))</tspan></text>
<text x="135" y="222" font-size="18" text-anchor="end">m</text>
<path d="M142 216 H245 V164" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<circle cx="245" cy="150" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="245" y="156" font-size="18" text-anchor="middle" font-weight="bold">+</text>
<text x="60" y="156" font-size="17" text-anchor="middle" fill="var(--palette-blue)">Alice</text>
<!-- cifratura con K_S -->
<line x1="257" y1="150" x2="318" y2="150" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<rect x="320" y="131" width="66" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="353" y="155.2" font-size="15" text-anchor="middle">K<tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="345" y="92" font-size="15" text-anchor="middle">K<tspan dy="4.5" font-size="10.5">S</tspan></text>
<g transform="translate(366 86) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="353" y1="98" x2="353" y2="129" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183239-a)"/>
<path d="M386 150 H440 V198" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<!-- K_S cifrata con K_B+ -->
<text x="290" y="283" font-size="17" text-anchor="end">K<tspan dy="5.1" font-size="11.9">S</tspan></text>
<line x1="295" y1="277" x2="318" y2="277" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<rect x="320" y="258" width="66" height="38" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="353" y="282.2" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan><tspan dy="-4.5">( · )</tspan></text>
<text x="345" y="338" font-size="15" text-anchor="middle">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan></text>
<g transform="translate(367 332) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<line x1="353" y1="322" x2="353" y2="298" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" marker-end="url(#i20241118183239-a)"/>
<path d="M386 277 H440 V226" fill="none" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<text x="392" y="306" font-size="15">K<tspan dy="-6.3" font-size="10.5">+</tspan><tspan dx="-6.3" dy="10.8" font-size="10.5">B</tspan><tspan dy="-4.5">(K</tspan><tspan dy="4.5" font-size="10.5">S</tspan><tspan dy="-4.5">)</tspan></text>
<circle cx="440" cy="212" r="12" fill="none" stroke="currentColor" stroke-width="1.5"/>
<text x="440" y="218" font-size="18" text-anchor="middle" font-weight="bold">+</text>
<!-- Internet -->
<line x1="452" y1="212" x2="488" y2="212" stroke="currentColor" stroke-width="2.5" marker-end="url(#i20241118183239-a)"/>
<path d="M502 237 C482 237 484 208 500 206 C494 187 526 181 538 191 C550 179 600 185 598 197 C618 195 618 233 600 237 Z" fill="var(--palette-teal)" fill-opacity="0.3" stroke="var(--palette-teal)" stroke-width="1.2"/>
<text x="550" y="218" font-size="16" text-anchor="middle">Internet</text>
</svg>

Il mittente può fornire riservatezza, autenticazione e integrità del messaggio. Allora usa tutte e 3 le chiavi, la privata, pubblica e simmetrica.

## SSL/TLS

è un protocollo di sicurezza utilizzato sopra il transport layer che fornisce:
- **riservatezza**: i messaggi sono cifrati tramite cifratura simmetrica
- **autenticazione**: tramite crittografia a chiave pubblica
- **integrità del messaggio**: tramite firma digitale

Le fasi principali per stabilire una connessione sicura sono:
- **Handshake**: Viene stabilita una connessione TCP, e i due client usano crittografia a chiave pubblica per scambiare una chiave simmetrica. 
- **Key Derivation**: I due client usano la chiave simmetrica per derivare un insieme di chiavi.
- **Data Transfer**: I dati da trasferire sono spezzati in blocchi.
- **Termination**: Vengono inviati messaggi speciali per terminare la connessione in maniera sicura.

### Handshake

- Il mittente crea una connessione TCP con il destinatario
- Il mittente verifica che il destinatario sia chi dice di essere tramite la CA
- Il mittente e il destinatario scambiano una chiave simmetrica (Master Secret) usata per generare le altre chiavi simmetriche della sessione TLS

### Key Derivation

Nota: Il MAC (Message Authentication Code) è un codice che viene aggiunto al messaggio per garantirne l'integrità. Il MAC è generato tramite una funzione di hash e una chiave segreta condivisa tra mittente e destinatario.

Tramite il Master Secret vengono generate 4 chiavi:
- $K_c$: chiave per cifrare i dati inviati dal client al server
- $M_c$: chiave MAC per i dati dal client al server
- $K_s$: chiave per cifrare i dati inviati dal server al client
- $M_s$: chiave MAC per i dati dal server al client

### Data Transfer

Dobbiamo poter inviare il MAC che garantisce l'integrità del messaggio. Potremmo mettere il MAC alla fine del messaggio, ma a questo punto dovremmo attendere che tutti i dati siano arrivati per poter verificare l'integrità del messaggio. 

Per evitare ciò, suddividiamo un messaggio in blocchi, e per ogni blocco ci sono 3 segmenti:

- la lunghezza del blocco dati 
- il blocco dati
- il MAC del blocco dati

Dobbiamo anche aggiungere un sequence number nel MAC, dove il MAC sarà formato da $MAC = H(M_x, \text{dati}, \text{sequence number})$, altrimenti un attaccante potrebbe catturare e reinviare un blocco di dati con lo stesso MAC, oppure potrebbe invertire l'ordine dei blocchi.

### Termination

Un attaccante potrebbe creare un segmento di chiusura connessione TCP, a questo punto uno o entrambi i lati potrebbero pensare che ci siano meno dati da trasferire di quanto si aspettassero.
Per risolvere questo problema, si aggiunge un nuovo field al blocco chiamato "type" dove un valore di 0 indica un blocco di dati, e un valore di 1 indica un blocco di chiusura.
A questo punto il MAC diventa $MAC = H(M_x, \text{dati}, \text{tipo},  \text{sequence number})$

## TLS reale

L'algorimo effettivamente usato per la comunicazione sicura aggiunge più informazioni alla comunicazione, come l'algoritmo di cifratura usato, e se usare RSA o DHE per lo scambio della chiave simmetrica.

1. Il client invia una lista di algoritmi che supporta, insieme ad un nonce client
2. Il server sceglie gli algoritmi dalla lista e risponde al client con la scelta + certificato + nonce server
3. Il client verifica il certificato, ne estrae la chiave pubblica del server e genera un "pre-master secret" che cifra con la chiave pubblica del server e invia al server
4. Client e server calcolano indipendentemente dal "pre-master secret" e nonce, la cifratura e chiavi MAC 
5. Il client invia un MAC di tutti i messaggi di handshake
6. Il server invia un MAC di tutti i messaggi di handshake

Gli step 5 e 6 servono per evitare che un MITM possa intercettare i messaggi di handshake e modificarli, come per esempio rimuovere gli algoritmi più forti dalla lista di algoritmi supportati.

Vengono usati due nonce casuali perchè un attaccante potrebbe intercettare il nonce del client e la sequenza di pacchetti handshake tra client e server, e in futuro riutilizzare il nonce e la sequenza di pacchetti per impersonare il client.

<svg viewBox="0 0 600 284" width="100%" style="max-width:600px;display:block;margin:1.5rem auto" role="img" aria-label="Frammentazione SSL: i dati vengono divisi in frammenti; a ogni frammento si aggiunge il MAC, frammento e MAC vengono cifrati con la chiave K_x e preceduti da un record header" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118190659-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- dati dell'applicazione -->
<rect x="180" y="4" width="280" height="50" fill="var(--palette-orange)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="320" y="35" font-size="17" text-anchor="middle">data</text>
<!-- frammentazione -->
<line x1="180" y1="54" x2="90" y2="124" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="320" y1="54" x2="225" y2="124" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="320" y1="54" x2="375" y2="124" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="460" y1="54" x2="510" y2="124" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<!-- frammento + MAC, poi record cifrato (x=90) -->
<rect x="90" y="124" width="135" height="52" fill="var(--palette-orange)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="157.5" y="144.8" font-size="16" text-anchor="middle">data</text>
<text x="157.5" y="166.4" font-size="16" text-anchor="middle">fragment</text>
<rect x="225" y="124" width="50" height="52" fill="var(--palette-purple)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="250" y="155.6" font-size="16" text-anchor="middle">MAC</text>
<line x1="90" y1="176" x2="90" y2="226" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="275" y1="176" x2="275" y2="226" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="38" y="226" width="52" height="52" fill="var(--palette-blue)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="64" y="248.1" font-size="12" text-anchor="middle">record</text>
<text x="64" y="264.3" font-size="12" text-anchor="middle">header</text>
<rect x="90" y="226" width="185" height="52" fill="var(--palette-green)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="182.5" y="246.8" font-size="16" text-anchor="middle">encrypted</text>
<text x="182.5" y="268.4" font-size="16" text-anchor="middle">data and MAC</text>
<line x1="185" y1="184" x2="185" y2="218" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190659-a)"/>
<text x="192" y="210" font-size="17">K<tspan dy="5.1" font-size="11.9">x</tspan></text>
<!-- frammento + MAC, poi record cifrato (x=375) -->
<rect x="375" y="124" width="135" height="52" fill="var(--palette-orange)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="442.5" y="144.8" font-size="16" text-anchor="middle">data</text>
<text x="442.5" y="166.4" font-size="16" text-anchor="middle">fragment</text>
<rect x="510" y="124" width="50" height="52" fill="var(--palette-purple)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="535" y="155.6" font-size="16" text-anchor="middle">MAC</text>
<line x1="375" y1="176" x2="375" y2="226" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="560" y1="176" x2="560" y2="226" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="323" y="226" width="52" height="52" fill="var(--palette-blue)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="349" y="248.1" font-size="12" text-anchor="middle">record</text>
<text x="349" y="264.3" font-size="12" text-anchor="middle">header</text>
<rect x="375" y="226" width="185" height="52" fill="var(--palette-green)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="467.5" y="246.8" font-size="16" text-anchor="middle">encrypted</text>
<text x="467.5" y="268.4" font-size="16" text-anchor="middle">data and MAC</text>
<line x1="470" y1="184" x2="470" y2="218" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190659-a)"/>
<text x="477" y="210" font-size="17">K<tspan dy="5.1" font-size="11.9">x</tspan></text>
</svg>

- **Record header**: contiene il tipo di messaggio, la versione del protocollo, la lunghezza del messaggio
- **MAC**: $H(M_x, \text{dati}, \text{tipo}, \text{sequence number})$
- **Fragment**: contiene i dati, che ha lunghezza di ~16KB

<svg viewBox="0 0 640 600" width="100%" style="max-width:640px;display:block;margin:1.5rem auto" role="img" aria-label="Handshake SSL tra Alice e Bob: ClientHello, ServerHello, Certificate, ServerHelloDone, ClientKeyExchange, ChangeCipherSpec e Finished in entrambe le direzioni; da ChangeCipherSpec in poi tutto è cifrato; poi application_data e Alert close_notify, seguito dal FIN TCP" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241118190933-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker><marker id="i20241118190933-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--palette-red)"/></marker></defs>
<text x="225" y="225" font-size="18" text-anchor="end" fill="var(--palette-blue)">Alice</text>
<text x="585" y="225" font-size="18" fill="var(--palette-blue)">Bob</text>
<line x1="250" y1="28" x2="560" y2="50" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="32" font-size="15" text-anchor="middle" transform="rotate(4.1 405 32)">handshake: ClientHello</text>
<line x1="560" y1="78" x2="250" y2="100" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="82" font-size="15" text-anchor="middle" transform="rotate(-4.1 405 82)">handshake: ServerHello</text>
<line x1="560" y1="113" x2="250" y2="135" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="117" font-size="15" text-anchor="middle" transform="rotate(-4.1 405 117)">handshake: Certificate</text>
<line x1="560" y1="148" x2="250" y2="170" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="152" font-size="15" text-anchor="middle" transform="rotate(-4.1 405 152)">handshake: ServerHelloDone</text>
<line x1="250" y1="208" x2="560" y2="230" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="212" font-size="15" text-anchor="middle" transform="rotate(4.1 405 212)">handshake: ClientKeyExchange</text>
<line x1="250" y1="238" x2="560" y2="260" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="242" font-size="15" text-anchor="middle" transform="rotate(4.1 405 242)">ChangeCipherSpec</text>
<line x1="250" y1="283" x2="560" y2="305" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="287" font-size="15" text-anchor="middle" transform="rotate(4.1 405 287)">handshake: Finished</text>
<line x1="560" y1="343" x2="250" y2="365" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="347" font-size="15" text-anchor="middle" transform="rotate(-4.1 405 347)">ChangeCipherSpec</text>
<line x1="560" y1="383" x2="250" y2="405" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="387" font-size="15" text-anchor="middle" transform="rotate(-4.1 405 387)">handshake: Finished</text>
<line x1="250" y1="443" x2="560" y2="465" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="447" font-size="15" text-anchor="middle" transform="rotate(4.1 405 447)">application_data</text>
<line x1="560" y1="488" x2="250" y2="510" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="492" font-size="15" text-anchor="middle" transform="rotate(-4.1 405 492)">application_data</text>
<line x1="250" y1="548" x2="560" y2="570" stroke="currentColor" stroke-width="1.2" marker-end="url(#i20241118190933-a)"/>
<text x="405" y="552" font-size="15" text-anchor="middle" transform="rotate(4.1 405 552)">Alert: warning, close_notify</text>
<!-- nota: cifratura attiva dopo ChangeCipherSpec -->
<text x="215" y="290" font-size="19" text-anchor="end" fill="var(--palette-red)"><tspan font-style="italic">ogni cosa</tspan></text>
<text x="215" y="315" font-size="19" text-anchor="end" fill="var(--palette-red)"><tspan font-style="italic">da adesso in poi</tspan></text>
<text x="215" y="340" font-size="19" text-anchor="end" fill="var(--palette-red)"><tspan font-style="italic">è cifrata</tspan></text>
<line x1="222" y1="280" x2="292" y2="244" stroke="var(--palette-red)" stroke-width="1.5" marker-end="url(#i20241118190933-r)"/>
<line x1="222" y1="332" x2="320" y2="362" stroke="var(--palette-red)" stroke-width="1.5" marker-end="url(#i20241118190933-r)"/>
<text x="30" y="585" font-size="16" fill="var(--palette-red)">segue il TCP FIN</text>
</svg>

## VPN (Virtual Private Network)

Le istituzioni vogliono poter usare una rete privata per comunicare, ma per poter creare 
una rete privata, sono necessari Router separati, link, infrastruttura DNS etc...

Per evitare ciò, si usa una VPN, che è una rete privata virtuale che usa la rete pubblica per trasmettere dati in maniera sicura,
cifrando i dati prima di inviarli sulla rete pubblica.

# Sicurezza a livello di rete (IPSec)

Aggiunge autenticazione, cifratura e controllo di integrità ai pacchetti IP. 
Permette di proteggere i protocolli di livello superiore, rimanendo trasparenti ad essi.

Può essere implementato come `transport mode` dove viene criptato solo il payload del pacchetto IP (negli host), oppure come `tunnel mode` dove viene criptato l'intero pacchetto IP (nei router).

A differenza di IP, IPsec è connection-oriented.

## IPSec: Authentication Header (AH)

Fornisce autenticazione e integrità del pacchetto IP, ma non riservatezza

## IPSec: Encapsulating Security Payload (ESP)

Fornisce autenticazione, integrità e riservatezza del pacchetto IP

## IPSec: Security Association (SA)

Prima di inviare i dati, viene stabilita una SA tra le due entità, questo contiene:
- Indirizzo IP del mittente e destinatario
- Protocollo di sicurezza (AH o ESP)
- Le tecniche di cifratura, e le chiavi usate
- Un numero 32 bit chiamato Security Parameter Index (SPI) che identifica la SA

Un esempio di SA da R1 a R2

![[Pasted image 20241121155647.png]]

R1 memorizza:
1. Identificatore SA, l'SPI
2. Interfacia di origine della SA (200.168.1.100)
3. Interfaccia di destinazione della SA (193.68.2.23)
4. Tipo di cifratura usata (es. 3DES con CBC)
5. Chiave di cifratura
6. Tipo di integrity check usato (es. HMAC con MD5)
7. Chiave di autenticazione

## IPSec: Security Association Database (SAD)

l'endpoint trattiene lo stato della SA nel SAD, quando invia datagrammi 
IPsec, R1 accede al SAD per determinare come trattare il datagramma.

Quando i datagrammi IPsec arrivano a R2, R2 esamina l'SPI nei datagrammi e indicizza il SAD con l'SPI per determinare come trattare il datagramma.

<svg viewBox="0 0 560 192" width="100%" style="max-width:560px;display:block;margin:1.5rem auto" role="img" aria-label="Datagramma IPsec ESP in modalità tunnel: new IP header, ESP header (SPI, numero di sequenza), header IP originale, payload originale, ESP trailer (padding, pad length, next header) e ESP MAC; autenticati dall'ESP header al trailer, cifrati dall'header IP originale al trailer" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241121161149-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
<!-- campi autenticati / cifrati -->
<line x1="236.4" y1="16" x2="110" y2="16" stroke="currentColor" stroke-width="1" marker-end="url(#i20241121161149-a)"/>
<line x1="357.6" y1="16" x2="484" y2="16" stroke="currentColor" stroke-width="1" marker-end="url(#i20241121161149-a)"/>
<text x="297" y="22" font-size="17" text-anchor="middle">autenticati</text>
<line x1="283.8" y1="46" x2="168" y2="46" stroke="currentColor" stroke-width="1" marker-end="url(#i20241121161149-a)"/>
<line x1="368.2" y1="46" x2="484" y2="46" stroke="currentColor" stroke-width="1" marker-end="url(#i20241121161149-a)"/>
<text x="326" y="52" font-size="17" text-anchor="middle">cifrati</text>
<!-- datagramma IPsec in modalità tunnel -->
<rect x="18" y="70" width="92" height="42" fill="none" stroke="currentColor" stroke-width="1.2"/>
<text x="64" y="86.5" font-size="14" text-anchor="middle">new IP</text>
<text x="64" y="105.4" font-size="14" text-anchor="middle">header</text>
<rect x="110" y="70" width="58" height="42" fill="var(--palette-purple)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="139" y="86.5" font-size="14" text-anchor="middle">ESP</text>
<text x="139" y="105.4" font-size="14" text-anchor="middle">hdr</text>
<rect x="168" y="70" width="78" height="42" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="207" y="86.5" font-size="14" text-anchor="middle">original</text>
<text x="207" y="105.4" font-size="14" text-anchor="middle">IP hdr</text>
<rect x="246" y="70" width="181" height="42" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="336.5" y="86.5" font-size="14" text-anchor="middle">Original IP</text>
<text x="336.5" y="105.4" font-size="14" text-anchor="middle">datagram payload</text>
<rect x="427" y="70" width="57" height="42" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="455.5" y="86.5" font-size="14" text-anchor="middle">ESP</text>
<text x="455.5" y="105.4" font-size="14" text-anchor="middle">trl</text>
<rect x="484" y="70" width="58" height="42" fill="var(--palette-orange)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="513" y="86.5" font-size="14" text-anchor="middle">ESP</text>
<text x="513" y="105.4" font-size="14" text-anchor="middle">MAC</text>
<!-- dettaglio header ESP -->
<line x1="110" y1="112" x2="85" y2="142" stroke="currentColor" stroke-width="1"/>
<line x1="168" y1="112" x2="198" y2="142" stroke="currentColor" stroke-width="1"/>
<rect x="85" y="142" width="56" height="44" fill="var(--palette-purple)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="113" y="168.9" font-size="14" text-anchor="middle">SPI</text>
<rect x="141" y="142" width="57" height="44" fill="var(--palette-purple)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="169.5" y="159.5" font-size="14" text-anchor="middle">Seq</text>
<text x="169.5" y="178.4" font-size="14" text-anchor="middle">#</text>
<!-- dettaglio trailer ESP -->
<line x1="427" y1="112" x2="360" y2="142" stroke="currentColor" stroke-width="1"/>
<line x1="484" y1="112" x2="545" y2="142" stroke="currentColor" stroke-width="1"/>
<rect x="360" y="142" width="67" height="44" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="393.5" y="168.9" font-size="14" text-anchor="middle">padding</text>
<rect x="427" y="142" width="56" height="44" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="455" y="159.5" font-size="14" text-anchor="middle">pad</text>
<text x="455" y="178.4" font-size="14" text-anchor="middle">length</text>
<rect x="483" y="142" width="62" height="44" fill="var(--palette-teal)" fill-opacity="0.25" stroke="currentColor" stroke-width="1.2"/>
<text x="514" y="159.5" font-size="14" text-anchor="middle">next</text>
<text x="514" y="178.4" font-size="14" text-anchor="middle">header</text>
</svg>

## IPSec: Security Policy Database (SPD)

Dato un datagramma, l'entità inviante deve sapere se deve usare IPsec, e quale SA usare.

Le informazioni prese dall'SPD dice all'entità "cosa" fare quando arriva un datagramma, mentre l'SAD dice all'entità "come" farlo.

## Convertire pacchetti IP in IPsec

Preso un datagramma IP, esso contiene un header IP e un payload, per convertirlo in un datagramma IPsec si:
- Aggiunge in fondo al datagramma originale un "ESP trailer" che contiene del padding per allineare il payload, il padding length che indica la lunghezza del padding, il next header che indica il protocollo del payload.
- Cifra questo datagramma aggiornato con l'algoritmo e chiave specificati nell'SA
- Aggiunge all'inizio della parte cifrata un "ESP header" che contiene il SPI e sequence number
- Crea un MAC del datagramma e lo aggiunge alla fine
- Crea un nuovo header IP con tutti i classici header di IPv4, e viene inserito all'inizio del datagramma IPsec

Il sequence number viene inizializzato a 0 per ogni nuova SA. Ogni volta che viene inviato un datagramma, il mittente incrementa il 
sequence number e lo mette come valore nel campo del datagramma.

Questo permette di evitare attacchi di tipo sniffing e replay, e ignora i pacchetti duplicati.

## IKE: Internet Key Exchange, PSK e PKI

IKE è un protocollo usato da IPsec per stabilire una comunicazione sicura tra dispositivi. Ha il compito di negoziare, stabilire e gestire gli SA. 

- PSK (Pre-Shared Key) si usa una chiave condivisa tra mittente e destinatario. Questa chiave è pre condivisa in partenza e viene usata per autenticare le due entità.
- PKI, usano la crittografia a chiave pubblica per scambiare le chiavi simmetriche, simile all'handshake di SSL/TLS

l'IKE ha due fasi:

1. Impostare le SA IKE bi-direzionali (ISAKMP SA), ha due modalità, aggressive mode che usa meno messaggi, e main mode che è più sicura e flessibile
2. Si usa la ISAKMP per negoziare in sicurezza le coppie di SA IPsec

## WEP: Wired Equivalent Privacy

Ha il compito di fornire riservatezza e integrità dei dati trasmessi su una rete wireless.

Un dispositivo e l'access point (AP) condividono una chiave segreta (PSK) usata nella connessione.

1. Il dispositivo fa richiesta di autenticazione all'AP
2. L'AP invia una chiave casuale al dispositivo (nonce) di 128 bytes
3. Il dispositivo cifra il nonce con la chiave segreta e lo invia all'AP
4. L'AP decifra il nonce e verifica che sia corretto

Questi step sono eseguiti prima dell'associazione del dispositivo alla rete.

Ogni pacchetto contiene un IV (Initialization Vector) di 24 bit, che viene concatenato alla chiave segreta per cifrare il pacchetto. L'IV è differente per ogni pacchetto.

![[Pasted image 20241121164136.png]]

### Violazione cifratura WEP 802.11

L'IV da 24 bit è troppo piccolo, ed essendo uno per frame, evenutalmente si andrà a riutilizzare un IV. E dato che essi sono trasmessi in plain text, si può rilevare un IV duplicato.

Un attacco può essere:
- Attaccante fa cifrare al mittente un testo conosciuto $d_1, d_2, d_3, ...$
- Attaccante cattura un pacchetto cifrato $c_i = d_i \oplus k_i^{IV}$
- Attaccante conosce $c_i$ e $d_i$, quindi può calcolare $k_i^{IV}$
- Attaccante conosce la sequenza delle chiavi di cifratura $k_i^{IV}$

La prossima volta che un IV viene riutilizzato, l'attaccante può decifrare il pacchetto.

## Autenticazione e cifratura in WPA3

1. L'AP annuncia la sua presenza e i metodi di autenticazione e cifratura forniti.
2. Il dispositivo richiede uno specifico metodo di autenticazione e cifratura 
3. Il server di autenticazione (AS) ha una chiave segreta che è stata condivisa in precendenza (password).
4. L'AS genera un NonceAS e lo invia al dispositivo
5. Il dispositivo riceve il NONCEAS, genera un NonceM, una chiave di sessione simmetrica $K_{M - {AP}}$ usando il NonceAS, NonceM e la password
6. Invia il NonceM e un valore HMAC al server usando il NonceAS e la password
7. Il server deriva la chiave di sessione simmetrica $K_{M - {AP}}$ e verifica il valore HMAC.
8. A questo punto l'AS ha la stessa chiave di sessione simmetrica del dispositivo, e può iniziare a comunicare in maniera sicura.

<svg viewBox="0 0 720 182" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Autenticazione tra mobile e Authentication Server con segreto condiviso iniziale: (a) l'AS invia Nonce_AS; il mobile deriva la chiave di sessione K_M-AP; (b) il mobile invia Nonce_M e HMAC(f(K_AS-M, Nonce_AS)); (c) l'AS deriva la stessa chiave di sessione" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241121165313-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--palette-blue)"/></marker></defs>
<!-- mobile e Authentication Server -->
<g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="176" y="6" width="38" height="25" rx="2"/><path d="M170 37 H220 L214 31 H176 Z"/></g>
<text x="232" y="24" font-size="19" fill="var(--palette-red)">mobile</text>
<g transform="translate(238 42) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="225" y="64" font-size="13">Initial shared secret</text>
<g fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor" stroke-width="1.2"><rect x="418" y="2" width="24" height="48" rx="2"/><line x1="422" y1="10" x2="438" y2="10"/><line x1="422" y1="17" x2="438" y2="17"/><line x1="422" y1="24" x2="438" y2="24"/><line x1="422" y1="31" x2="438" y2="31"/></g>
<text x="450" y="26" font-size="22" fill="var(--palette-red)">AS</text>
<text x="482" y="26" font-size="17">Authentication Server</text>
<g transform="translate(460 42) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="450" y="64" font-size="13">Initial shared secret</text>
<!-- (a) nonce dell'AS -->
<line x1="438" y1="104" x2="222" y2="104" stroke="var(--palette-blue)" stroke-width="4" marker-end="url(#i20241121165313-a)"/>
<circle cx="318" cy="104" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="318" y="109" font-size="14" text-anchor="middle">a</text>
<text x="395" y="92" font-size="14" text-anchor="middle"><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">AS</tspan></text>
<text x="212" y="102" font-size="14" text-anchor="end">deriva chiave di sessione K<tspan dy="4.2" font-size="9.8">M-AP</tspan></text>
<text x="212" y="121" font-size="14" text-anchor="end">usando la shared-secret,</text>
<text x="212" y="140" font-size="14" text-anchor="end"><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">AS</tspan><tspan dy="-4.2">, </tspan><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">M</tspan></text>
<!-- (b) nonce del mobile e HMAC -->
<line x1="222" y1="134" x2="432" y2="134" stroke="var(--palette-blue)" stroke-width="4" marker-end="url(#i20241121165313-a)"/>
<circle cx="318" cy="134" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="318" y="139" font-size="14" text-anchor="middle">b</text>
<text x="318" y="166" font-size="14" text-anchor="middle"><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">M</tspan><tspan dy="-4.2">, HMAC(f(K</tspan><tspan dy="4.2" font-size="9.8">AS-M</tspan><tspan dy="-4.2">,</tspan><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">AS</tspan><tspan dy="-4.2">))</tspan></text>
<!-- (c) l'AS deriva la stessa chiave -->
<circle cx="460" cy="132" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="460" y="137" font-size="14" text-anchor="middle">c</text>
<text x="478" y="132" font-size="14">deriva chiave di sessione K<tspan dy="4.2" font-size="9.8">M-AP</tspan></text>
<text x="478" y="151" font-size="14">usando la shared secret,</text>
<text x="478" y="170" font-size="14"><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">AS</tspan><tspan dy="-4.2">, </tspan><tspan font-style="italic">Nonce</tspan><tspan dy="4.2" font-size="9.8" font-style="italic">M</tspan></text>
</svg>

## Autenticazione e cifratura in 4G LTE

Il dispositivo mobile che vuole connettersi alla Base Station (BS) deve autenticarsi nella rete e autenticare la retete stessa.

La sim stessa contiene un identità globale, e le chiavi condivise.

<svg viewBox="0 0 720 330" width="100%" style="max-width:720px;display:block;margin:1.5rem auto" role="img" aria-label="Autenticazione 4G/LTE: il mobile invia attach alla base station e all'MME della rete visitata; (a) l'MME invia AUTH_REQ con IMSI e informazioni sulla rete visitata all'HSS della rete di casa; (b) l'HSS risponde con AUTH_RESP (auth token, xres_HSS, chiavi); l'auth token arriva al mobile; (c) il mobile risponde con res_M; (d) l'MME confronta e invia OK e le chiavi; (e) derivazione delle chiavi tra mobile e base station" fill="currentColor" font-family="Arial, Helvetica, sans-serif">
<defs><marker id="i20241121172722-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--palette-blue)"/></marker></defs>
<!-- mobile -->
<text x="8" y="50" font-size="18" fill="var(--palette-red)">mobile</text>
<g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="66" y="20" width="26" height="46" rx="4"/><line x1="69" y1="26" x2="89" y2="26"/><line x1="69" y1="58" x2="89" y2="58"/></g>
<path d="M100 36 H150 V26 L172 46 L150 66 V56 H100 Z" fill="var(--palette-blue)" fill-opacity="0.3"/>
<g transform="translate(124 24) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="150" y="30" font-size="15">K<tspan dy="4.5" font-size="10.5">BS-M</tspan></text>
<g transform="translate(124 84) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="150" y="90" font-size="15">K<tspan dy="4.5" font-size="10.5">HSS-M</tspan></text>
<!-- base station -->
<path d="M196 50 L227 0 L289 0 L320 50 L289 100 L227 100 Z" fill="var(--palette-teal)" fill-opacity="0.25" stroke="none"/>
<g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M246 59 L258 14 L270 59 M250 44 H266 M254 29 H262"/><path d="M248 16 A12 12 0 0 1 268 16 M242 12 A20 20 0 0 1 274 12"/></g>
<text x="258" y="112" font-size="14" text-anchor="middle">Base station (BS)</text>
<!-- rete visitata: MME -->
<path d="M340 100 C319 100 319 15 340 6 C382 -6 458 -2 500 4 C521 12 521 100 500 100 Z" fill="var(--palette-teal)" fill-opacity="0.25" stroke="none"/>
<g fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor" stroke-width="1.2"><rect x="340" y="18" width="24" height="52" rx="2"/><line x1="344" y1="26" x2="360" y2="26"/><line x1="344" y1="33" x2="360" y2="33"/><line x1="344" y1="40" x2="360" y2="40"/><line x1="344" y1="47" x2="360" y2="47"/><line x1="344" y1="54" x2="360" y2="54"/></g>
<text x="372" y="30" font-size="14">Mobility</text>
<text x="372" y="47" font-size="14">Management</text>
<text x="372" y="64" font-size="14">Entity (<tspan font-weight="bold">MME</tspan>)</text>
<text x="420" y="106" font-size="14" text-anchor="middle">Visited network</text>
<line x1="518" y1="50" x2="556" y2="50" stroke="currentColor" stroke-width="1"/>
<!-- rete di casa: HSS -->
<path d="M570 100 C549 100 549 19 570 10 C603 -2 667 2 700 8 C721 16 721 100 700 100 Z" fill="var(--palette-teal)" fill-opacity="0.25" stroke="none"/>
<g fill="var(--palette-muted)" fill-opacity="0.3" stroke="currentColor" stroke-width="1.2"><rect x="570" y="30" width="24" height="46" rx="2"/><line x1="574" y1="38" x2="590" y2="38"/><line x1="574" y1="45" x2="590" y2="45"/><line x1="574" y1="52" x2="590" y2="52"/><line x1="574" y1="59" x2="590" y2="59"/></g>
<text x="604" y="18" font-size="14">Home Subscriber</text>
<text x="604" y="35" font-size="14">Service (<tspan font-weight="bold">HSS</tspan>)</text>
<g transform="translate(608 62) scale(1.0)" fill="none" stroke="var(--palette-orange)" stroke-width="2"><circle r="5"/><path d="M5 0h15M14 0v4M18 0v5"/></g>
<text x="634" y="68" font-size="15">K<tspan dy="4.5" font-size="10.5">HSS-M</tspan></text>
<text x="640" y="104" font-size="14" text-anchor="middle">Home network</text>
<!-- scambio di messaggi -->
<line x1="75" y1="152" x2="235" y2="152" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="155" y="143" font-size="13" text-anchor="middle">attach</text>
<line x1="250" y1="152" x2="385" y2="152" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="317.5" y="143" font-size="13" text-anchor="middle">attach</text>
<line x1="402" y1="158" x2="640" y2="158" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="521" y="143" font-size="13" text-anchor="middle">AUTH_REQ (IMSI, VN info)</text>
<circle cx="521" cy="158" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="521" y="163" font-size="14" text-anchor="middle">a</text>
<line x1="231" y1="192" x2="75" y2="192" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="155" y="183" font-size="13" text-anchor="middle">auth token</text>
<line x1="381" y1="192" x2="250" y2="192" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="317.5" y="183" font-size="13" text-anchor="middle">auth token</text>
<line x1="636" y1="186" x2="402" y2="186" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="521" y="212" font-size="13" text-anchor="middle">AUTH_RESP (auth token,xres<tspan dy="3.9" font-size="9.1">HSS</tspan><tspan dy="-3.9">,keys)</tspan></text>
<circle cx="521" cy="186" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="521" y="191" font-size="14" text-anchor="middle">b</text>
<line x1="75" y1="225" x2="235" y2="225" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<circle cx="155" cy="225" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="155" y="230" font-size="14" text-anchor="middle">c</text>
<line x1="250" y1="225" x2="385" y2="225" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="317.5" y="216" font-size="13" text-anchor="middle">res<tspan dy="3.9" font-size="9.1">M</tspan></text>
<line x1="231" y1="274" x2="75" y2="274" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<text x="110" y="265" font-size="13" text-anchor="middle">OK</text>
<line x1="381" y1="268" x2="250" y2="268" stroke="var(--palette-blue)" stroke-width="3.5" marker-end="url(#i20241121172722-a)"/>
<circle cx="317.5" cy="268" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="317.5" y="273" font-size="14" text-anchor="middle">d</text>
<text x="318" y="254" font-size="13" text-anchor="middle">OK, chiavi</text>
<line x1="75" y1="316" x2="235" y2="316" stroke="var(--palette-blue)" stroke-width="3.5" marker-start="url(#i20241121172722-a)" marker-end="url(#i20241121172722-a)"/>
<text x="155" y="301" font-size="13" text-anchor="middle">key derivation</text>
<circle cx="155" cy="316" r="10" fill="var(--background, var(--background-primary, none))" stroke="var(--palette-blue)" stroke-width="2"/>
<text x="155" y="321" font-size="14" text-anchor="middle">e</text>
</svg>

Il mobile e il BS usano la chiave di sessione derivata $K_{BS-M}$ per cifrare le comunicazioni sul link 4G

L'MME della visited network e il HHS della home network prendono insieme lo stesso ruolo che ha AS nel WiFi. 
L'autenticatore è l'HSS, e ci sono accordi di fiducia tra i vari MME e HSS.

1. Il mobile invia richiesta di autenticazione all'HSS, inviando un "attach message" che contine il proprio IMSI, e informazioni sulla rete di origine. Questo viene inoltrato dalla BS alla visited MME alla home HHS. 
2. L'HSS usa la chiave segreta precondivisa $K_{HSS-M}$ per generare un codice di autenticazione (auth_token) che contiene le info dell'HSS cifrate usando $K_{HSS-M}$, questo garantisce al mobile che chiunque abbia generato il token conosce $K_{HSS-M}$. A questo punto il mobile ha autenticato la rete. Riceve un $xres_{hss}$ che verrà usato per autenticare il mobile.
3. Il mobile elabora un messaggio di risposta $res_M$ usando la propria chiave segreta, ed eseguire gli stessi calcoli che ha compiuto l'HSS per calcolare $xres_{hss}$, e lo invia all'MME
4. L'MME confronta il valore di $res_M$ con quello calcolato da se stesso ($xres_{hss}$) , e se sono uguali, il mobile è autenticato nella rete. A questo punto l'MME informa la BS che il mobile è autenticato e genera le chiavi per la BS. 
5. Mobile e BS determinano le chiavi per cifrare i dati e si inviano dei frame di controllo sul canale wireless 4G, a questo punto si può usare AES.

# Firewall e IDS

Un firewall ha il compito di isolare la rete interna di un organizzazione dal resto dell'internet, permettendo solo ad alcuni pacchetti di passare.

I firewall evitato attacchi DoS di SYN flooding, non permettendo l'istaurazione di connessioni TCP da parte di host non autorizzati.

## Filtro stateless di pacchetti 

La rete interna è connessa all'internet tramite un router firewall che filtra pacchetto per pacchetto in base all'IP sorgente e destinazione, numeri di porta TCP e UDP sorgnte o destinazione, i tipi di messaggi ICMP e i bit TCP SYN e attack

Per esempio se un firewall bloca tutti i pacchetti su porta sorgente o destinazione 23, che usano protocollo IP 17 (UDP), allora blocca tutte le connessioni telnet e UDP.

| **Obiettivo**                                              | **Regola**                                                                                     |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Nessun accesso Web verso l'esterno                        | Scarta tutti i pacchetti in uscita verso qualsiasi indirizzo IP, porta 80                      |
| Nessuna connessione TCP in entrata, tranne verso il server Web dell'istituzione | Scarta tutti i pacchetti TCP SYN in entrata verso qualsiasi IP tranne 130.207.244.203, porta 80 |
| Impedisci ai Web-radios di consumare tutta la bandwidth disponibile | Scarta tutti i pacchetti UDP in entrata tranne DNS e router broadcast                          |
| Impedisci che la tua rete sia usata per un attacco DoS     | Scarta tutti i pacchetti ICMP in uscita verso un indirizzo "broadcast" (es. 130.207.255.255)   |
| Impedisci che la tua rete risponda al traceroute           | Scarta tutti i pacchetti ICMP in uscita con TTL expired                                        |

## Access Control List (ACL)

è una tabella di regole che vengono applicate dalla prima all'ultima, sono coppie (azione, condizione)

| **Action** | **Source Address** | **Dest Address** | **Protocol** | **Source Port** | **Dest Port** | **Flag Bit** |
|------------|--------------------|------------------|--------------|------------------|---------------|--------------|
| Allow      | 222.22/16          | Outside of 222.22/16 | TCP          | > 1023           | 80            | Any          |
| Allow      | Outside of 222.22/16 | 222.22/16        | TCP          | 80               | > 1023        | ACK          |
| Allow      | 222.22/16          | Outside of 222.22/16 | UDP          | > 1023           | 53            | ---          |
| Allow      | Outside of 222.22/16 | 222.22/16        | UDP          | 53               | > 1023        | ----         |
| Deny       | All                | All              | All          | All              | All           | All          |

## Filtro stateful di pacchetti

Il filtraggio stateless non sa nulla sulle connessioni, per esempio permette un pacchetto TCP con ACK settato, anche se non c'è stata una connessione TCP.

Il filtraggio stateful di pacchetti tiene traccia di ogni connessione TCP, e determina se pacchietti in entrata e uscita fanno parte di una connessione TCP esistente.

## Application layer gateway (ALG)

???

## Limitazioni di firewall e gateway

- è possibile fare IP spoofing, i router non possono sapere se i dati arrivano realmente dalla sorgente dichiarata.
- se occorre un trattamento speciale per piu di un applicazione, allora ogniuna deve avere il proprio gateway
- il client deve sapere come comunicare con il gateway

## Intrusion Detection System (IDS)

Opera solo sugli header TCP/IP, ed analizza se i pacchetti contengono pattern di attacco.

