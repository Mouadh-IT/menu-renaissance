/* =====================================================================
   CONFIGURATION — La Renaissance
   Un seul fichier à modifier, partagé par les deux applications.

   ⚠️ À SAVOIR SUR LA CLÉ
   La clé publiable ci-dessous EST visible par les visiteurs, et c'est
   normal : toute application web qui parle à Supabase depuis un
   navigateur expose la sienne. La masquer est impossible.

   Ce qui protège réellement les données, c'est RLS (Row Level Security),
   activé par schema.sql. Avec RLS, cette clé ne permet que :
     · lire la carte (produits actifs)
     · déposer une commande, toujours marquée NON PAYÉE
   Elle ne permet PAS de lire les commandes des autres, ni de modifier
   quoi que ce soit. Le bouton « Diagnostic » de la tablette le vérifie.

   La clé SECRÈTE (sb_secret_…), elle, ne doit JAMAIS figurer ici ni dans
   aucun fichier mis en ligne. Elle vit uniquement dans les secrets des
   Edge Functions, côté serveur.
   ===================================================================== */

window.LR_CONFIG = {

  // Supabase — Settings > API Keys, et bouton « Connect » pour l'URL
  supabase: {
    url: "https://hozehidavynpiqcvxara.supabase.co",
    cle: "sb_publishable_Efrk7t-pjAhRaQeMeOsQfA_u3CsQ8pc"
  },

  // Stripe — clé PUBLIABLE uniquement (pk_test_… puis pk_live_…)
  // Laisser vide tant que le paiement en ligne n'est pas en place.
  stripePk: ""

};
