import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';


const LegalNotice = () => {

    const scrollToTop= () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return(
        <div className='container'>
            <div className='container--top-part'>
                <div>
                    <h2>Informations générales</h2>
                    <p>Le site internet "J'adopte un humain" est créé dans le cadre d'un projet de fin de formation et n'est pas un site internet réel. Il n'est pas destiné à être hébergé ni utilisé dans un contexte de production.</p>
                    <h2>Propriété intellectuelle</h2>
                    <p>Le contenu du site internet "J'adopte un humain", y compris mais sans s'y limiter, les textes, les images, les logos, les marques de commerce et les éléments graphiques, sont créés à des fins éducatives et ne sont pas destinés à être utilisés en dehors du cadre du projet de fin de formation. Toute utilisation en dehors du contexte du projet de fin de formation est strictement interdite.</p>
                    <h2>Collecte de données personnelles</h2>
                    <p>Étant donné que le site internet "J'adopte un humain" est fictif et n'est pas destiné à être utilisé dans un contexte de production, aucune collecte de données personnelles n'est effectuée.</p>
                    <h2>Utilisation des cookies</h2>
                    <p>Étant donné que le site internet "J'adopte un humain" est fictif et n'est pas destiné à être utilisé dans un contexte de production, aucune utilisation de cookies n'est effectuée.</p>
                    <h2>Liens externes</h2>
                    <p>Le site internet "J'adopte un humain" étant fictif, il ne contient pas de liens externes.</p>
                    <h2>Responsabilité</h2>
                    <p>Le site internet "J'adopte un humain" est créé à des fins éducatives uniquement et n'a aucune valeur légale ou commerciale. Les informations fournies sur le site sont fictives et ne doivent pas être considérées comme des conseils professionnels. Les utilisateurs du site doivent faire preuve de discernement et ne pas se baser sur les informations du site pour prendre des décisions dans un contexte réel.</p>
                    <h2>Modifications des mentions légales</h2>
                    <p>Étant donné que le site internet "J'adopte un humain" est fictif, les mentions légales ne sont pas destinées à être modifiées.</p>
                    <h2>Loi applicable et juridiction compétente</h2>
                    <p>Étant donné que le site internet "J'adopte un humain" est fictif, aucune loi applicable ni juridiction compétente ne s'appliquent.</p>
                    <div className='container--top-part--button' onClick={scrollToTop}>
                        <span>
                            <Link to='/'>Retour à l'accueil</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>


)
}

export default LegalNotice;