---
layout: page
title: Mentions legales & confidentialite
locale: fr
translation_key: legal
permalink: /fr/legal
---
<div class="col-lg-12 text-center">
  <h2 class="section-heading text-uppercase">Mentions legales & confidentialite</h2>
</div>

**INFORMATIONS LEGALES**

Ce site presente un appartement meuble de vacances a Briancon et permet aux visiteurs d'envoyer directement une demande de reservation au proprietaire.

- Editeur : proprietaire particulier
- Nom legal de l'editeur : {{ site.publisher_name }}
- Adresse postale de l'editeur : {{ site.publisher_address }}
- Telephone de l'editeur : {{ site.publisher_phone }}
- Contact : <a href="mailto:{{ site.email }}">{{ site.email }}</a>
- Site web : {{ site.url }}{{ site.baseurl }}/fr/
- Hebergeur : GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, Etats-Unis
- Code hebergement taxe de sejour : {{ site.taxesejour_code }}
- Montant/taux de taxe de sejour : {{ site.taxesejour_amount }}
- Numero d'enregistrement du meuble de tourisme : {{ site.meuble_registration_number }}
- Statut de l'annonce : {{ site.listing_status }}
- Information de performance energetique : {{ site.energy_performance }}

**INFORMATIONS DE RESERVATION**

- Capacite : jusqu'a 4 voyageurs
- Surface : 45 m2
- Chambres : 2
- Parking : 1 place de stationnement
- Disponibilite : juillet, aout et premiere quinzaine de septembre
- Sejour minimum : 3 nuits
- Tarif indicatif : 80-85 EUR par nuit ; des reductions pour les sejours plus longs peuvent etre discutees
- Arrivee : a partir de 16h00
- Depart : jusqu'a 10h00
- Draps et serviettes : fournis
- Conditions de paiement et d'annulation : {{ site.payment_terms }}

La taxe de sejour, lorsqu'elle s'applique, sera indiquee avant la confirmation de la reservation et separement sur toute facture ou demande de paiement.

**CONFIDENTIALITE**

Cette politique explique comment vos donnees personnelles sont collectees et utilisees lorsque vous visitez {{ site.title }}.

{% if site.analytics.google %}

Collecte automatique (Google Analytics) :

Lorsque vous visitez le site, nous recevons automatiquement certaines informations techniques de votre navigateur, par exemple votre adresse IP. Nous collectons aussi des informations sur votre utilisation du site.

Ces informations sont collectees a l'aide de cookies. Pour en savoir plus sur les cookies et leur desactivation, consultez http://www.allaboutcookies.org.

Google Analytics : <https://www.google.com/intl/fr/policies/privacy/>.

Vous pouvez desactiver Google Analytics ici : <https://tools.google.com/dlpage/gaoptout>.

{% else %}

Nous n'utilisons pas de cookies d'analyse. Si vous envoyez une demande via le formulaire de contact, nous collectons les informations que vous choisissez de fournir, comme votre nom, votre adresse email, votre telephone, les dates demandees, la taille du groupe et votre message.

{% endif %}

Les donnees de demande de reservation servent uniquement a repondre a votre demande, discuter des disponibilites et gerer une eventuelle location. Elles ne sont pas vendues ni partagees a des fins marketing.

**MISES A JOUR**

Cette page peut etre mise a jour pour des raisons personnelles, operationnelles, legales ou reglementaires.

**CONTACT**

Pour toute question sur cette page ou sur les donnees personnelles, contactez-nous par email a <a href="mailto:{{ site.email }}">{{ site.email }}</a>.
