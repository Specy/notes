---
title: Extra
description: "Formule di riferimento del corso: limiti, derivate e integrali notevoli e i principali sviluppi di Taylor e Maclaurin."
type: resource
---

# Extra 

## 🟢 Note

- $\Large{a^b = \left( \frac{1}{a} \right)^{-b}}$ 

## 🟢 Limiti notevoli

**Successioni.**

$$
\begin{array}{ll}
\displaystyle\lim_{n \to +\infty} q^n = \begin{cases} +\infty & \text{se } q > 1, \\ 1 & \text{se } q = 1, \\ 0 & \text{se } \lvert q \rvert < 1, \\ \nexists & \text{se } q \le -1 \end{cases} & \\[2.6em]
\displaystyle\lim_{n \to +\infty} n^\alpha = \begin{cases} +\infty & \text{se } \alpha > 0, \\ 1 & \text{se } \alpha = 0, \\ 0 & \text{se } \alpha < 0 \end{cases} & \\[2.2em]
\displaystyle\lim_{n \to +\infty} \sqrt[n]{a} = 1 & \qquad \text{per ogni } a > 0 \\[0.8em]
\displaystyle\lim_{n \to +\infty} \sqrt[n]{n^\alpha} = 1 & \qquad \text{per ogni } \alpha \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{\ln(n)}{n^\alpha} = 0 & \qquad \text{per ogni } \alpha > 0 \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{n^\alpha}{q^n} = 0 & \qquad \text{per ogni } \alpha \in \mathbb{R},\ q > 1 \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{q^n}{n!} = 0 & \qquad \text{per ogni } q \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{n \to +\infty} \frac{n!}{n^n} = 0 & \\[0.8em]
\displaystyle\lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n = e & \qquad \text{più in generale} \\[0.8em]
\displaystyle\lim_{n \to +\infty} \left(1 + \frac{a}{x_n}\right)^{x_n} = e^a & \qquad \text{se } \lvert x_n \rvert \to +\infty \text{ per } n \to +\infty \\[0.8em]
\displaystyle\lim_{n \to +\infty} (a_n)^{b_n} = a^b & \qquad \text{se } a_n \to a > 0 \text{ e } b_n \to b \text{ per } n \to +\infty
\end{array}
$$

**Funzioni.**

$$
\begin{array}{ll}
\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1 & \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{1 - \cos(x)}{x^2} = \frac{1}{2} & \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x} = 1 & \qquad \text{più in generale} \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{a^x - 1}{x} = \ln(a) & \qquad \text{per ogni } a > 0 \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1 & \qquad \text{più in generale} \\[0.8em]
\displaystyle\lim_{x \to \pm\infty} \left(1 + \frac{t}{x}\right)^x = e^t & \qquad \text{per ogni } t \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{x \to 0} \frac{(1 + x)^r - 1}{x} = r & \qquad \text{per ogni } r \in \mathbb{R} \\[0.8em]
\displaystyle\lim_{x \to +\infty} \frac{\ln(x)}{x^\alpha} = 0 & \qquad \text{per ogni } \alpha > 0 \\[0.8em]
\displaystyle\lim_{x \to 0^+} x^\alpha \cdot \ln(x) = 0 & \qquad \text{per ogni } \alpha > 0 \\[0.8em]
\displaystyle\lim_{x \to 0^+} x^x = 1 &
\end{array}
$$

$$
\begin{array}{|l|l|l|}
\hline
1.\ \displaystyle\lim_{x \to 0} \frac{\sin x}{x} = 1 & 2.\ \displaystyle\lim_{x \to 0} \frac{\tan x}{x} = 1 & 3.\ \displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x} = 0 \\[1.4em]
\hline
4.\ \displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2} & 5.\ \displaystyle\lim_{x \to 0} \frac{x}{\arcsin x} = 1 & 6.\ \displaystyle\lim_{x \to 0} \frac{x}{\arctan x} = 1 \\[1.4em]
\hline
\end{array}
$$

$$
\begin{array}{|l|l|l|}
\hline
7.\ \displaystyle\lim_{x \to \pm\infty} \left(1 + \frac{\alpha}{x}\right)^x = e^\alpha & 8.\ \displaystyle\lim_{x \to 0} (1 + \alpha x)^{\frac{1}{x}} = e^\alpha & 9.\ \displaystyle\lim_{x \to 0} \frac{\log_a(1 + x)}{x} = \frac{1}{\ln a} \\[1.6em]
\hline
10.\ \displaystyle\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a & 11.\ \displaystyle\lim_{x \to 0} \frac{e^x - 1}{x} = 1 & 12.\ \displaystyle\lim_{x \to 0} \frac{(1 + x)^a - 1}{x} = a \\[1.4em]
\hline
\end{array}
$$

$$
\begin{array}{|l|l|}
\hline
13.\ \displaystyle\lim_{n \to +\infty} \sqrt[n]{x} = 1 \ \forall x \in \mathbb{R}_+ - \{0\} & 14.\ \displaystyle\lim_{n \to +\infty} a^n = \begin{cases} 0 & \text{se } -1 < a < 1 \\ 1 & \text{se } a = 1 \\ +\infty & \text{se } a > 1 \\ \nexists & \text{se } a \le -1 \end{cases} \\[2.6em]
\hline
15.\ \displaystyle\lim_{n \to +\infty} \sqrt[n]{n} = 1 \ \forall x \in \mathbb{R}_+ - \{0\} & 16.\ \displaystyle\lim_{n \to +\infty} \sqrt[n]{n^\alpha} = 1 \ \forall \alpha \in \mathbb{R} \\[1.4em]
\hline
17.\ \displaystyle\lim_{n \to +\infty} \frac{n!}{n^n} = 0 & 18.\ \displaystyle\lim_{n \to +\infty} \frac{n}{a^n} = 0 \ \forall a > 1 \\[1.4em]
\hline
19.\ \displaystyle\lim_{n \to +\infty} \frac{n^\alpha}{a^n} = 0 \ \forall a > 1 & 20.\ \displaystyle\lim_{n \to +\infty} \frac{n}{a^n} = 0 \ \forall a > 1 \\[1.4em]
\hline
21.\ \displaystyle\lim_{n \to +\infty} \frac{(\ln n)^\beta}{n^\alpha} = 0 \ \forall a > 1 \wedge \beta \in \mathbb{R} & 22.\ \displaystyle\lim_{n \to +\infty} \sqrt[n]{n!} = +\infty \\[1.4em]
\hline
23.\ \displaystyle\lim_{n \to +\infty} \left(1 + \frac{\alpha}{n}\right)^n = e^\alpha & 24.\ \displaystyle\lim_{n \to +\infty} n \sin\frac{1}{n} = 1 \\[1.4em]
\hline
\end{array}
$$

## 🟢 Derivate notevoli

| | | |
|:---:|:---:|:---:|
| costante | $0$ | \[DEF\] Derivata di una costante |
| $x$ | $1$ | \[DEF\] Derivata di x |
| $x^s \quad (s \in \mathbb{R})$ | $s x^{s-1}$ | \[DEF\] Derivata di una potenza |
| $a^x$ | $a^x \ln(a)$ | \[DEF\] Derivata dell'esponenziale |
| $e^x$ | $e^x$ | \[DEF\] Come sopra |
| $\log_a(x)$ | $\dfrac{1}{x \ln(a)}$ | \[DEF\] Derivata del logaritmo |
| $\ln(x)$ | $\dfrac{1}{x}$ | \[DEF\] Come sopra |
| $\lvert x \rvert$ | $\dfrac{\lvert x \rvert}{x}$ | \[DEF\] Derivata valore assoluto |
| $\sin(x)$ | $\cos(x)$ | \[DEF\] Derivata del seno |
| $\cos(x)$ | $-\sin(x)$ | \[DEF\] Derivata del coseno |
| $\tan(x)$ | $\dfrac{1}{\cos^2(x)}$ | \[AD\] Derivata della tangente |

| | | |
|:---:|:---:|:---:|
| $\cot(x)$ | $\dfrac{-1}{\sin^2(x)}$ | \[AD\] Derivata della cotangente |
| $\sec(x)$ | $\tan(x) \sec(x)$ | \[AD\] Come sopra |
| $\csc(x)$ | $-\cot(x) \csc(x)$ | \[AD\] Come sopra |
| $\arcsin(x)$ | $\dfrac{1}{\sqrt{1 - x^2}}$ | \[DFI\] Derivata dell'arcoseno |
| $\arccos(x)$ | $\dfrac{-1}{\sqrt{1 - x^2}}$ | \[DFI\] Analoga alla precedente |
| $\arctan(x)$ | $\dfrac{1}{1 + x^2}$ | \[DFI\] Derivata dell'arcotangente |
| $\operatorname{arccot}(x)$ | $\dfrac{-1}{1 + x^2}$ | \[DFI\] Analoga alla precedente |
| $\operatorname{arcsec}(x)$ | $\dfrac{1}{x^2 \sqrt{1 - \dfrac{1}{x^2}}}$ | \[DFI\] Analoga alla precedente |
| $\operatorname{arccsc}(x)$ | $\dfrac{-1}{x^2 \sqrt{1 - \dfrac{1}{x^2}}}$ | \[DFI\] Analoga alla precedente |

| | | |
|:---:|:---:|:---:|
| $\sinh(x) = \dfrac{e^x - e^{-x}}{2}$ | $\cosh(x)$ | \[AD\] Algebra delle derivate |
| $\cosh(x) = \dfrac{e^x + e^{-x}}{2}$ | $\sinh(x)$ | \[AD\] Come sopra |

## 🟢 Integrali notevoli

| | |
|:---:|:---:|
| $\displaystyle\int f'(x)\,dx = f(x) + c$ | $\displaystyle\int f'(g(x)) \cdot g'(x)\,dx = f(g(x)) + c$ |
| $\displaystyle\int a \cdot dx = ax + c$ | |
| $\begin{gathered}\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + c \\ \text{se } n \ne -1\end{gathered}$ | $\begin{gathered}\displaystyle\int [f(x)]^n f'(x)\,dx = \frac{[f(x)]^{n+1}}{n+1} + c \\ \text{se } n \ne -1\end{gathered}$ |
| $\displaystyle\int \frac{1}{x}\,dx = \ln(\lvert x \rvert) + c$ | $\displaystyle\int \frac{f'(x)}{f(x)}\,dx = \ln(\lvert f(x) \rvert) + c$ |
| $\displaystyle\int \sin(x)\,dx = -\cos(x) + c$ | $\displaystyle\int \sin(f(x)) \cdot f'(x)\,dx = -\cos(f(x)) + c$ |
| $\displaystyle\int \cos(x)\,dx = \sin(x) + c$ | $\displaystyle\int \cos(f(x)) \cdot f'(x)\,dx = \sin(f(x)) + c$ |
| $\displaystyle\int \frac{1}{\cos^2(x)}\,dx = \tan(x) + c$ | $\displaystyle\int \frac{1}{\cos^2(f(x))} \cdot f'(x)\,dx = \tan(f(x)) + c$ |
| $\displaystyle\int \frac{1}{\sin^2(x)}\,dx = -\cot(x) + c$ | $\displaystyle\int \frac{1}{\sin^2(f(x))} \cdot f'(x)\,dx = -\cot(f(x)) + c$ |

| | |
|:---:|:---:|
| $\displaystyle\int e^x\,dx = e^x + c$ | $\displaystyle\int e^{f(x)} \cdot f'(x)\,dx = e^{f(x)} + c$ |
| $\displaystyle\int a^x\,dx = \frac{a^x}{\ln(a)} + c$ | $\displaystyle\int a^{f(x)} \cdot f'(x)\,dx = \frac{a^{f(x)}}{\ln(a)} + c$ |
| $\displaystyle\int \sinh(x)\,dx = \cosh(x) + c$ | $\displaystyle\int \sinh(f(x)) \cdot f'(x)\,dx = \cosh(f(x)) + c$ |
| $\displaystyle\int \cosh(x)\,dx = \sinh(x) + c$ | $\displaystyle\int \cosh(f(x)) \cdot f'(x)\,dx = \sinh(f(x)) + c$ |
| $\displaystyle\int \frac{1}{1 + x^2}\,dx = \arctan(x) + c$ | $\displaystyle\int \frac{1}{1 + [f(x)]^2} \cdot f'(x)\,dx = \arctan(f(x)) + c$ |
| $\displaystyle\int \frac{1}{\sqrt{1 - x^2}}\,dx = \arcsin(x) + c$ | $\displaystyle\int \frac{1}{\sqrt{1 - [f(x)]^2}} \cdot f'(x)\,dx = \arcsin(f(x)) + c$ |
| $\displaystyle\int \frac{-1}{\sqrt{1 - x^2}}\,dx = \arccos(x) + c$ | $\displaystyle\int \frac{-1}{\sqrt{1 - [f(x)]^2}} \cdot f'(x)\,dx = \arccos(f(x)) + c$ |

## 🟢 Sviluppi di taylor/maclaurin

Sviluppi di maclaurin con $x \to 0$ 

$$
\begin{aligned}
e^x &= 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3) = 1 + x + \frac{x^2}{2} + o(x^2) = 1 + x + o(x) \\[0.6em]
\sin(x) &= x - \frac{x^3}{6} + o(x^4) = x + o(x^2) \\[0.6em]
\cos(x) &= 1 - \frac{x^2}{2} + o(x^3) = 1 + o(x) \\[0.6em]
\sinh(x) &= x + \frac{x^3}{6} + o(x^4) = x + o(x^2) \\[0.6em]
\cosh(x) &= 1 + \frac{x^2}{2} + o(x^3) = 1 + o(x) \\[0.6em]
\ln(1 + x) &= x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3) = x - \frac{x^2}{2} + o(x^2) = x + o(x) \\[0.6em]
\sqrt{1 + x} &= 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2) = 1 + \frac{x}{2} + o(x)
\end{aligned}
$$

| Funzione | Sviluppo in forma troncata |
|:---|:---|
| $\sin(x)$ | $\sin(x) = x - \frac{x^3}{6} + \frac{x^5}{120} - \frac{x^7}{5040} + o(x^7), \quad \forall x \in \mathbb{R}$ |
| $\cos(x)$ | $\cos(x) = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \frac{x^6}{720} + \frac{x^8}{40320} + o(x^8), \quad \forall x \in \mathbb{R}$ |
| $\tan(x)$ | $\tan(x) = x + \frac{x^3}{3} + \frac{2}{15} x^5 + o(x^5), \quad \lvert x \rvert < \frac{\pi}{2}$ |
| $\sec(x)$ | $\sec(x) = 1 + \frac{x^2}{2} + \frac{5}{24} x^4 + \frac{61}{720} x^6 + \frac{277}{8064} x^8 + o(x^8), \quad \lvert x \rvert < \frac{\pi}{2}$ |
| $\arcsin(x)$ | $\arcsin(x) = x + \frac{x^3}{6} + \frac{3}{40} x^5 + \frac{5}{112} x^7 + \frac{35}{1152} x^9 + o(x^9), \quad \lvert x \rvert < 1$ |
| $\arccos(x)$ | $\arccos(x) = \frac{\pi}{2} - x - \frac{x^3}{6} - \frac{3}{40} x^5 - \frac{5}{112} x^7 - \frac{35}{1152} x^9 + o(x^9), \quad \lvert x \rvert < 1$ |
| $\arctan(x)$ | $\arctan(x) = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \frac{x^9}{9} + o(x^9), \quad \lvert x \rvert < 1$ |
| $e^x$ | $e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \frac{x^5}{120} + o(x^5), \quad \forall x \in \mathbb{R}$ |
| $\ln(1+x)$ | $\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} + o(x^5), \quad \lvert x \rvert < 1$ |
| $(1+x)^\alpha$ | $(1+x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha-1)}{2} x^2 + \frac{\alpha(\alpha-1)(\alpha-2)}{6} x^3 + o(x^3), \quad \lvert x \rvert < 1$ |
| $\dfrac{1}{1-x}$ | $\dfrac{1}{1-x} = 1 + x + x^2 + x^3 + x^4 + o(x^4), \quad \lvert x \rvert < 1$ |
| $\dfrac{1}{1+x^2}$ | $\dfrac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + o(x^6), \quad \lvert x \rvert < 1$ |
| $\sinh(x)$ | $x + \frac{x^3}{6} + \frac{x^5}{120} + \frac{x^7}{5040} + o(x^7)$ |
| $\cosh(x)$ | $1 + \frac{x^2}{2} + \frac{x^4}{24} + \frac{x^6}{720} + o(x^6)$ |

| Funzione | Sviluppo in forma compatta |
|:---|:---|
| $\sin(x)$ | $\sin(x) = \displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1}, \quad \forall x \in \mathbb{R}$ |
| $\cos(x)$ | $\cos(x) = \displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} x^{2n}, \quad \forall x \in \mathbb{R}$ |
| $e^x$ | $e^x = \displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!} \quad \forall x \in \mathbb{R}$ |
| $\ln(1+x)$ | $\ln(1+x) = \displaystyle\sum_{n=1}^{\infty} (-1)^{n+1} \frac{x^n}{n}, \quad \lvert x \rvert < 1$ |
| $\dfrac{1}{1-x}$ | $\displaystyle\sum_{n=0}^{\infty} x^n, \quad \lvert x \rvert < 1$ |
| $\dfrac{1}{1+x^2}$ | $\displaystyle\sum_{n=0}^{\infty} (-1)^n x^{2n}, \quad \lvert x \rvert < 1$ |

