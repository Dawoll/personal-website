# Dokumentacja projektu

[Działająca strona](https://dawoll.github.io/personal-website/) · [README](../README.pl.md) · [English documentation](documentation.en.md)

## 📁 Struktura projektu

```text
personal-website/
├── index.html                  # Strona główna (EN)
├── cs.html                     # Counter-Strike (EN)
├── music.html                  # Muzyka (EN)
├── mygame.html                 # Projekt gry (EN)
├── pl/                         # Polskie odpowiedniki czterech stron
├── css/style.css               # Wspólne style i responsywność
├── javaScript/functions.js     # Interakcje strony
├── javaScript/storage.js       # Zapamiętywanie motywu i języka
├── javaScript/contact.js       # Formularz Web3Forms
├── assets/                     # Grafiki, ikonki, czcionki, GIF-y i filmy
├── docs/                       # Dokumentacje
├── README.md                   # Angielskie README
└── README.pl.md                # Polskie README
```

## ⚙️ Główne funkcjonalności

### functions.js

- Zmiana motywu jasnego i ciemnego.
- Zmiana języka.
- Dopasowanie ikony motywu.
- Dopasowanie flagi języka.
- Animacje ikon.
- Kopiowanie adresu e-mail.
- Powiększanie zdjęć.
- Wyświetlanie animacji postaci.
- Wybór i odtwarzanie filmów.
- Automatyczne przechodzenie do następnego filmu.
- Płynny powrót na górę strony.
- Rozwijane menu na telefonie.

### storage.js

- Zapisuje wartość w `localStorage`.
- Otwiera odpowiednik kolejnej podstrony w zapamiętanym języku.
- Otwiera odpowiednik kolejnej podstrony w zapamiętanym motywie.

Każdy język ma własne HTML-e co jest optymalnym rozwiązaniem dla czterech podstron. JS nie tłumaczy tekstu, tylko zapamiętuje wybór.

### contact.js

Plik contact.js obsługuje formularz Web3Forms, korzystając z wygenerowanego kodu oraz kluczy z oryginalnej strony.

### Funkcje HTML i CSS

- Listy muzyczne.
- Nawigacja i linki zewnętrzne.
- Przekrzywione, nakładające się zdjęcia.
- Wysuwanie napisów przy kontaktach.
- Efekty najechania kursorem.
- Nazwy drużyn w tle.
- Narożniki przy wyświetlanym filmie.
- Dane zawodników, **nie są one automatycznie pobierane z HLTV**.

## 🔧 Rozwiązania techniczne

### HTML

- **Semantyka i nagłówki:** **`header`, `nav`, `main`, `section`, `article` i `footer`** opisują role treści. Każda strona ma główny **`h1`**, sekcje **`h2`** i w razie potrzeby **`h3`**.
- **Dostępność:** zastosowano **`aria-label`, `aria-controls`, `aria-expanded`, `aria-current="page"`**. Pomagają one czytnikom ekranu.
- Przypisanie do elementu **ID i klasy jednocześnie:** ID wskazuje konkretny element dla odwołania ARIA, a klasa nadaje wspólne style.
- **Puste `alt=""`:** dekoracyjne ikony obok równoważnego tekstu są pomijane przez czytnik, żeby nie duplikować informacji.
- **`aria-hidden="true"`** ukrywa dekorację przed czytnikami.
- **`defer`:** skrypty wczytują się przy przetwarzaniu HTML i wykonują dopiero po jego przetworzeniu.
- **`?v=n`:** parametr przy ścieżce pliku, który daje inny adres i odświeża starszy plik z cache.
- **`target="_blank"` i `rel="noopener"`:** otwierają link w nowej karcie i blokują otwartej stronie dostęp do strony źródłowej i jej edycji.

### CSS

- **Zmienne: `--text`, `--panel`**.
- **Pseudoklasy: `:hover`, `:last-child`**.
- **Pseudoelementy: `::before` i `::after`**.
- **Czcionki:** TrueType **`.ttf`**.
- **Selektory `[]`:** wybierają elementy według atrybutów HTML.
- **`inherit`:** przejmuje czcionkę lub kolor rodzica.
- Zastosowanie `vw`, `vh` zależnych od rozdzielczości oraz `em`, które zależy od czcionki.
- **`clamp()`** wprowadza płynne rozmiary.
- **`calc()`** oblicza wartość używając różnych wielkości.
- Użycie **`translateX(0)`** przywraca pozycję poziomą.
- **`white-space: nowrap`** utrzymuje kwotę i walutę razem.

## 📱 Responsywność

Widoki referencyjne to **390px, 768px, 1366px i 1920px**, z płynnym dopasowaniem pomiędzy nimi.
Oddzielna reguła z **529–900px** centruje trzecią kartę gracza pod dwiema pozostałymi - podstrona z Counter-Strike'iem.

## 📜 Zasoby i licencje

Zapoznaj się z licencjami użytych materiałów, [licencje oraz pomoc AI](credits.pl.md)

## 👤 Autor

**Dawid Głowacki**<br>
Numer albumu: **103381**<br>
Specjalizacja: **Techniki Informacyjne**<br>
Grupa: **TI 5.9**<br>
**Informatyka, Politechnika Lubelska**
