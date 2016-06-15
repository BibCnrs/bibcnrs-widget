import { BibHeader } from './BibHeader';

describe('BibHeader', function () {

    it('should display BibHeader', function () {
        const props = {
            EBSCO_WIDGET_domain: 'insb',
            EBSCO_WIDGET_username: 'john doe',
            EBSCO_WIDGET_availableDomains: ['insb', 'inshs']
        };

        const component = enzyme.shallow(<BibHeader { ...props } />);
        const div = component.find('.connexion');
        const img = div.find('.bibcnrslogo');
        assert.equal(img.props().src, 'lib/images/bibcnrs-logo-insb.png');
        const nameDiv = div.find('.name');
        assert.equal(nameDiv.text(), 'Bonjour john doe');
        const domainDiv = div.find('.domain');
        assert.equal(domainDiv.text(), 'Votre domaine principal : insb');
        const otherDomainsDiv = div.find('.otherDomains');
        assert.equal(otherDomainsDiv.text(), 'Les domaines possibles : insb, inshs');
    });
});