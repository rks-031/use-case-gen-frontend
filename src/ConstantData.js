const ConstantData = {
    urlPath: {
        search: { curr: 'search', next: 'onsearch' ,nextName: 'on_search' },
        on_search: { curr: 'onsearch', next: 'select' , nextName:'select'},
        select: { curr: 'select', next: 'onselect' ,nextName: 'on_select'},
        on_select: { curr: 'onselect', next: 'init' , nextName:'init'},
        init: { curr: 'init', next: 'oninit' , nextName: 'on_init'},
        on_init: { curr: 'oninit', next: 'confirm' , nextName:'confirm'},
        confirm: { curr: 'confirm', next: 'onconfirm',nextName: 'on_confirm'},
        on_confirm: { curr: 'onconfirm', next: 'status', nextName: 'status' },
        status: { curr: 'status', next: 'onstatus' },
        on_status: { curr: 'onstatus', next: 'track' },
        track: { curr: 'track', next: 'ontrack' },
        on_track: { curr: 'ontrack', next: 'update' },
        update: { curr: 'update', next: 'onupdate' },
        on_update: { curr: 'onupdate', next: 'cancel' },
        cancel: { curr: 'cancel', next: 'oncancel' },
        on_cancel: { curr: 'oncancel', next: 'rating' },
        rating: { curr: 'rating', next: 'onrating' },
        on_rating: { curr: 'onrating', next: 'support' },
        support: { curr: 'support', next: 'onsupport' },
        on_support: { curr: 'onsupport', next: 'graph' }
    },
    info: {
        home: {
            head: 'Basic Information',
            list: [
                'Please provide information about your organisation and role in the network.',
                'This form is to be completed only by the participants involved in the Retail Domain.'
            ]
        },
        search: {
            head: 'Use Cases for search',
            list: [
                'The Search API allows buyers to discover catalogs published by the providers on the network.',
                'BAP: indicate the different ways in which a customer can search for catalogs',
                'BPP: indicate expected search queries for the catalogs',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3'
            ]
        },
        on_search: {
            head: 'Use Cases for on_search',
            list: [
                'The on_search API allows sellers to respond to a search call with a catalog matching the search query',
                'BAP: indicate expected catalog for search queries',
                'BPP: indicate catalogs that can be published as search results',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        select: {
            head: 'Use Cases for select',
            list: [
                'The select API allows buyers to build a cart with items of their choice from the catalog received in the on_search response',
                'BAP: indicate the different entities that can be added to a cart',
                'BPP: indicate the expected entities that can be received in a cart',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        on_select: {
            head: 'Use case for on_select',
            list: [
                'The on_select API allows seller to calculate and provide a quote for the items added in the buyers cart.',
                'As a BAP: please indicate the different entities for which a quote can be received.',
                'As a BPP: please indicate the accepted entities for which a quote can be generated.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below. You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please try to generate unique combinations of catalogs as possible.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        init: {
            head: 'Use case for init',
            list: [
                'The init API allows the buyer to send the details that would be used to generate an invoice for the order.',
                'As a BAP: please indicate the different parameters which can be sent to generate an invoice.',
                'As a BPP: please indicate the accepted parameters which can be used to generate an invoice.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below. You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of invoice parameters.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        on_init: {
            head: 'Use case for on_init',
            list: [
                'The on_init API allows the seller to transmit the updated quote, payment terms and various policies that relate to the order.',
                'As a BAP: please indicate the different policies which can be displayed to the buyer.',
                'As a BPP: please indicate the different policies that can be sent to the buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below. You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of policies to be sent.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        confirm: {
            head: 'Use cases for Confirm',
            list: [
                'The confirm API allows the buyer to select and proceed with the preferred mode of payment and create an order.',
                'As a BAP: please indicate the different modes of confirmation of an order for a buyer.',
                'As a BPP: please indicate the accepted modes of confirmation of an order.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below. You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of confirmation modes.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        on_confirm: {
            head: 'Use cases for on_confirm',
            list: [
                'The on_confirm API allows the seller to validate the payment (or promise of payment) and confirm the order, hence creating a commercial consideration.',
                'As a BAP: Please indicate the different responses that a buyer will receive upon confirmation of an order.',
                'As a BPP: please indicate the different ways of confirming an order.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below. You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of confirmation modes.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        status: {
            head: 'Use cases for Status',
            list: [
                'The status API allows the buyer to determine the latest fulfilment status of an order.',
                'As a BAP: please indicate the different parameters that can be used to identify the status of an order.',
                'As a BPP: please indicate the accepted parameters to return a status for an order.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.',
            ]
        },
        on_status: {
            head: 'Use cases for on_status',
            list: [
                'The on_status API allows the seller to return the latest fulfilment status of an order.',
                'As a BAP: please indicate the different ways by which the status can be displayed to the buyer.',
                'As a BPP: please indicate the different ways by which status can be generated and sent to the buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.',
            ]
        },
        track: {
            head: 'Use case for track',
            list: [
                'The track API allows the buyer to identify the current location of the package when it is being delivered.',
                'As a BAP: please indicate the different parameters that can be used to track the location of a package.',
                'As a BPP: please indicate the accepted parameters that can be used to track the location of a package.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of tracking parameters.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        on_track: {
            head: 'Use cases for on_track',
            list: [
                'The on_track API allows the seller to provide information on the latest location of the package when it is being delivered.',
                'As a BAP: Please indicate the different methods by which the tracking information can be presented to the buyer.',
                'As a BPP: please indicate the different methods by which the tracking information can be shared with the buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of tracking parameters.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        update: {
            head: 'Use cases for update',
            list: [
                'The update API allows the buyer to make modifications to an active order, subject to the order policies of the seller.',
                'As a BAP: please indicate the different entities of an order that a buyer would be able to update.',
                'As a BPP: please indicate the accepted entities of an order that can be updated by a buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of order update entities.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        on_update: {
            head: 'Use cases for on_update',
            list: [
                'The on_update API allows the seller to accept the modifications to the order and respond back with updated order as well as additional payment terms, where required.',
                'As a BAP: please indicate the different ways by which an updated order can be displayed to the buyer.',
                'As a BPP: please indicate the different ways by which an updated order can be transmitted to the buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of order update confirmations.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        cancel: {
            head: 'Use cases for cancel',
            list: [
                'The cancel API allows the buyer to cancel an active order, subject to the cancellation policies of the seller.',
                'As a BAP: please indicate the different parameters to be used to cancel an active order.',
                'As a BPP: please indicate the accepted parameters to be used to cancel an active order.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.',
            ]
        },
        on_cancel: {
            head: 'Use cases for on_cancel',
            list: [
                'The on_cancel API allows the seller to accept the cancellation of an order and respond back with the cancellation terms if required.',
                'As a BAP: please indicate the different ways a cancelled order and its terms can be displayed to a buyer.',
                'As a BPP: please indicate the different ways an order can be cancelled and its terms be transmitted to the buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.',
            ]
        },
        rating: {
            head: 'Use cases for Rating',
            list: [
                'The rating API allows a buyer to rate various entities of a completed order.',
                'As a BAP: please indicate the various entities of an order that a buyer can rate.',
                'As a BPP: please indicate the accepted entities for which a rating can be provided.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.',
            ]
        },
        on_rating: {
            head: 'Use cases for on_rating',
            list: [
                'The on_rating API allows sellers to respond to the ratings received from a buyer.',
                'As a BAP: please indicate the different responses that can be presented to the buyer.',
                'As a BPP: please indicate the different responses that are generated for the ratings received.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.',
            ]
        },
        support: {
            head: 'Use cases for Support',
            list: [
                'The support API allows a buyer to request for a means to connect with the seller (or seller platform) in order to clarify queries or raise issues with a specific order.',
                'As a BAP: please indicate the different parameters used to initiate a support request.',
                'As a BPP: please indicate the accepted parameters that can be used to initiate a support request.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of support parameters.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        on_support: {
            head: 'Use cases for on_support',
            list: [
                'The on_support API allows a seller to respond with the relevant information to connect with the buyer.',
                'As a BAP: please indicate the accepted modes to initiate a support request for the buyer.',
                'As a BPP: please indicate the different modes by which support can be provided to the buyer.',
                'Please indicate your selections by selecting the check-boxes for each parameter mentioned below.You may generate single parameter or multi-parameter use cases.',
                'Each use case can have multiple parameters, but please generate unique combinations of support methods.',
                'Please limit the number of use cases to 3 most commonly used options to be immediately implemented.'
            ]
        },
        graph: {
            head:'Graphical representation of the transaction Flows',
            list: [
                'Based on your selections, these are all the transaction flows that are possible on the network.',
                'Please review your selections. In case there are any parameters/nodes that are not in line with the transaction flows on your platform, please click on the (x) on the node to remove that particular flow.',
                'Once the transaction flows are finalised, please export the data using the options provided (export as PDF, export as JSON).',
                'Please share a copy of the exported files to ondc@qcin.org & <a href = "mailto: saransh.agarwal@qcin.org">saransh.agarwal@qcin.org</a>'
            ]
        }


    }

}

export default ConstantData;