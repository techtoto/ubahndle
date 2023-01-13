import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          hint: "Travel from {{origin}} to {{destination}} with 2 changes.",
          error: {
            not_enough: "Not enough trains for the journey",
            not_valid: "Not a valid journey"
          },
          settings: {
            title: "Settings",
            display: {
              title: "Display",
              show_badges: "Show answer status badges",
              show_badges_hint: "Having trouble seeing the difference in the colours? Turn on status badges!",
              darkMode: "Dark Mode",
            }
          },
          statistics: {
            title: "Statistics",
            total_games: "Played",
            success_rate: "Win %",
            current_streak: "Current<1 />Streak",
            max_streak: "Max<1 />Streak",
            guess_distribution: "Guess Distribution",
          },
          solution: {
            win_message: "Brilliant! You completed today's journey!",
            lose_message: "Oh no, looks like you got lost in Frankfurt...",
            title: "Today's Journey",
            direction: "from {{origin}} to {{destination}}",
            share: "Share",
            copied: "Copied",
          },
          about: {
            title: "How to Play",
            intro: "<p>Guess the <strong>UBAHNDLE</strong> in 6 tries.</p><p>Each guess must a be a <strong>valid train trip involving 3 trains</strong> using valid interchanges marked on the RMV-Schnellbahnplan (as well with walking disance, such as S F-Eschersheim/U Weißer Stein) between them.</p><p>You need to guess a specific set of three trains that can make the trip.</p>",
            explanation: "<p><strong>Multiple routings may be possible</strong> to make the trip, but your goal is to find <strong>the one routing</strong> that matches the puzzle of the day. The solution <strong>may or may not</strong> be the fastest or efficient routing.</p><p>Routing for each train line is based on <strong>weekday off-peak schedule</strong> (except the S8 runs to Hanau Hbf).</p>",
            examples: {
              title: "Examples",
              correct: "is in the correct position of the trip.",
              present: "is part of the trip, but in the wrong position.",
              absent: "is not part of the trip in any position.",
            },
            about: {
              title: "About",
              subwaydle: "This game is forked from the <1>Berlin version</1>, which is a fork of the original <2>Subwaydle</2> game based on the NYC Subway system.",
              around_the_world: "Subwaydles around the world: <1>New York</1>, <3>Hong Kong</3>, <5>London</5>, <7>Berlin</7>.",
              inspirations: "Inspired by <1>Wordle</1>, its <3>open-source clone</3>, <5>Nerdle</5>, and <7>New York Transit Museum</7> Trivia Nights.",
              created: "Created by <1>Sunny Ng</1> and adapted to the Frankfurt rapid transit system by <3>techtoto</3>.",
              sourcecode: "<0>Source code</0>.",
              geo: "Geolocation data © <1>OpenStreetMap contributors</1>.",
              other_projects: "Check out Sunny Ng's other NYC Subway related projects:"
            }
          }
        }
      },
      de: {
        translation: {
          hint: "Fahre von {{origin}} nach {{destination}} mit genau 2 Umstiegen.",
          error: {
            not_enough: "Nicht genug Züge für die Fahrt",
            not_valid: "Fahrtverlauf nicht gültig"
          },
          settings: {
            title: "Einstellungen",
            display: {
              title: "Anzeige",
              show_badges: "Status-Indikatoren anzeigen",
              show_badges_hint: "Probleme, die Farbkodierung der Lösungen zu sehen? Status-Indikatoren können helfen.",
              darkMode: "Dunkler Modus",
            }
          },
          statistics: {
            title: "Statistiken",
            total_games: "Gespielt",
            success_rate: "Gewinn-%",
            current_streak: "Aktuelle<1 />Gewinnsträhne",
            max_streak: "Höchste<1 />Gewinnsträhne",
            guess_distribution: "Antwortverteilung",
          },
          solution: {
            win_message: "Großartig! Du hast die heutige Fahrt geschafft!",
            lose_message: "Oh nein, du hast dich wohl in Frankfurt verfahren...",
            title: "Heutiger Fahrtverlauf",
            direction: "von {{origin}} nach {{destination}}",
            share: "Teilen",
            copied: "Kopiert",
          },
          about: {
            title: "Spielanleitung",
            intro: "<p>Errate das <strong>UBAHNDLE</strong> mit 6 Versuchen.</p><p>Jeder Versuch muss eine <strong>gültige Fahrt mit exakt drei verschiedenen S- und U-Bahn-Linien</strong> sein.</p><p>Dabei müssen <strong>gültige Umstiege</strong> verwendet werden, d.h. solche, die auf dem offiziellen RMV-Schnellbahnplan als solche (auch mit Laufdistanz, z.B. S F-Eschersheim/U Weißer Stein) gekennzeichnet sind.</p><p>Dein Ziel ist es, die exakt korrekte Kombination an Linien für die tägliche Fahrt zu finden.</p>",
            explanation: "<p>In den meisten Fällen ist es möglich, <strong>mit mehreren unterschiedlichen Fahrtverläufen</strong> die Strecke zwischen den beiden Stationen zu fahren. Dein Ziel ist es aber, <strong>den einen richtigen Fahrtverlauf</strong> zu finden, der die Lösung auf das Tagesrätsel darstellt. Diese Lösung <strong>muss nicht</strong> die schnellste Verbindung sein - in den allermeisten Fällen ist sie das gerade nicht.</p><p>Der Verlauf jeder Linie entspricht denen an einem regulären, störungsfreien Tag unter der Woche. Aktuelle Bauarbeiten, HVZ-Verstärker oder Abweichungen im Nachtverkehr werden nicht berücksichtigt.</p>",
            examples: {
              title: "Beispiele",
              correct: "ist in der korrekten Position im Fahrtverlauf.",
              present: "wird auf der Fahrt verwendet, aber an einer anderen Position.",
              absent: "kommt im Fahrtverlauf nicht vor.",
            },
            about: {
              title: "Über das Spiel",
              subwaydle: "Dieses Spiel wurde von der <1>Berliner Version</1> des originalen New Yorker <3>Subwaydle</3> geforkt.",
              around_the_world: "Subwaydles auf der ganzen Welt: <1>New York</1>, <3>Hong Kong</3>, <5>London</5>, <7>Berlin</7>.",
              inspirations: "Inspiriert von <1>Wordle</1>, dem <3>Open-Source-Klon</3>, <5>Nerdle</5>, und <7>New York Transit Museum</7> Trivia Nights.",
              created: "Konzipiert und programmiert von <1>Sunny Ng</1> und an das Frankfurter ÖPNV-System angepasst von <3>techtoto</3>.",
              sourcecode: "<0>Quellcode</0>.",
              geo: "Geodaten © <1>OpenStreetMap Contributors</1>.",
              other_projects: "Schaut gerne bei Sunny Ng's anderen New-York-Subway-basierten Projekten vorbei:"
            }
          }
        }
      },
    }
  });

export default i18n;
