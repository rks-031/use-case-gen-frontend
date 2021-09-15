const ConstantData = {
    urlPath: {
        search: { curr: 'search', next: 'onsearch', nextName: 'on_search' },
        on_search: { curr: 'onsearch', next: 'select', nextName: 'select' },
        select: { curr: 'select', next: 'onselect', nextName: 'on_select' },
        on_select: { curr: 'onselect', next: 'init', nextName: 'init' },
        init: { curr: 'init', next: 'oninit', nextName: 'on_init' },
        on_init: { curr: 'oninit', next: 'confirm', nextName: 'confirm' },
        confirm: { curr: 'confirm', next: 'onconfirm', nextName: 'on_confirm' },
        on_confirm: { curr: 'onconfirm', next: 'status', nextName: 'status' },
        status: { curr: 'status', next: 'onstatus', nextName: 'on_status' },
        on_status: { curr: 'onstatus', next: 'track', nextName: 'track' },
        track: { curr: 'track', next: 'ontrack', nextName: 'on_track' },
        on_track: { curr: 'ontrack', next: 'update', nextName: 'update' },
        update: { curr: 'update', next: 'onupdate', nextName: 'on_update' },
        on_update: { curr: 'onupdate', next: 'cancel', nextName: 'cancel' },
        cancel: { curr: 'cancel', next: 'oncancel', nextName: 'on_cancel' },
        on_cancel: { curr: 'oncancel', next: 'rating', nextName: 'rating' },
        rating: { curr: 'rating', next: 'onrating', nextName: 'on_rating' },
        on_rating: { curr: 'onrating', next: 'support', nextName: 'support' },
        support: { curr: 'support', next: 'onsupport', nextName: 'on_support' },
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
                'The on_select API allows seller to calculate and provide a quote for the items added in the buyers cart',
                'BAP: indicate the expected entities in the quote',
                'BPP: indicate the different entities generated in the quote',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        init: {
            head: 'Use case for init',
            list: [
                'The init API allows the buyer to send the details that would be used to generate an invoice for the order',
                'BAP: indicate the different parameters transmitted for invoice',
                'BPP: indicate the expected parameters for invoice generation',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        on_init: {
            head: 'Use case for on_init',
            list: [
                'The on_init API allows the seller to transmit the updated quote, payment terms and various policies that relate to the order',
                'BAP: indicate the different policies which can be displayed to the buyer',
                'BPP: please indicate the different policies that can be sent to the buyer',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        confirm: {
            head: 'Use cases for Confirm',
            list: [
                'The confirm API allows the buyer to select and proceed with the preferred mode of payment and create an order.',
                'BAP: please indicate the different modes of order confirmation',
                'BPP: please indicate the expected modes of order confirmation',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        on_confirm: {
            head: 'Use cases for on_confirm',
            list: [
                'The on_confirm API allows the seller to validate the payment (or promise of payment) and confirm the order, hence creating a commercial consideration.',
                'BAP: indicate the expected responses received for confirmed order',
                'BPP: please indicate the different ways of confirming an order',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        status: {
            head: 'Use cases for Status',
            list: [
                'The status API allows the buyer to determine the latest fulfilment status of an order',
                'BAP: indicate the different parameters to check order status',
                'BPP: indicate the expected parameters to return order status',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        on_status: {
            head: 'Use cases for on_status',
            list: [
                'The on_status API allows the seller to return the latest fulfilment status of an order',
                'BAP: indicate the expected responses for order status',
                'BPP: indicate the different order status responses',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        track: {
            head: 'Use case for track',
            list: [
                'The track API allows the buyer to identify the current location of the package when it is being delivered',
                'BAP: indicate the different parameters to track package',
                'BPP: indicate the expected parameters to provide tracking',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        on_track: {
            head: 'Use cases for on_track',
            list: [
                'Use cases for on_track:',
                'The on_track API allows the seller to provide information on the latest location of the package when it is being delivered',
                'BAP: indicate the expected tracking information',
                'BPP: indicate the different methods to send tracking information',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        update: {
            head: 'Use cases for update',
            list: [
                'Use cases for update:',
                'The update API allows the buyer to make modifications to an active order, subject to the order policies of the seller',
                'BAP: indicate the different entities that can be updated in an order',
                'BPP: please indicate the expected entities that can be updated in an order',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        on_update: {
            head: 'Use cases for on_update',
            list: [
                'The on_update API allows the seller to accept the modifications to the order and respond back with updated order as well as additional payment terms, where required',
                'BAP: indicate the expected methods to receive an updated order',
                'BPP: indicate the different ways to respond with an updated order',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        cancel: {
            head: 'Use cases for cancel',
            list: [
                'The cancel API allows the buyer to cancel an active order, subject to the cancellation policies of the seller',
                'BAP: indicate the different parameters to cancel an order',
                'BPP: indicate the expected parameters to cancel an active order',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        on_cancel: {
            head: 'Use cases for on_cancel',
            list: [
                'The on_cancel API allows the seller to accept the cancellation of an order and respond back with the cancellation terms if required.',
                'BAP: indicate the expected methods to receive a cancelled order',
                'BPP: indicate the different methods to send a cancelled order',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        rating: {
            head: 'Use cases for Rating',
            list: [
                'The rating API allows a buyer to rate various entities of a completed order',
                'BAP: indicate the order entities that a buyer can rate',
                'BPP: indicate the expected entities which can be rated',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        on_rating: {
            head: 'Use cases for on_rating',
            list: [
                'The on_rating API allows sellers to respond to the ratings received from a buyer',
                'BAP: indicate the expected responses for a rating submission',
                'BPP: indicate the different responses generated for rating',
                'Select relevant checkboxes for unique use cases',
                'Use case limit = 3',
            ]
        },
        support: {
            head: 'Use cases for Support',
            list: [
                'The support API allows a buyer to request for a means to connect with the seller (or seller platform) in order to clarify queries or raise issues with a specific order',
                'BAP: indicate the different parameters used to initiate a support request',
                'BPP: indicate the expected parameters used to initiate a support request',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        on_support: {
            head: 'Use cases for on_support',
            list: [
                'The on_support API allows a seller to respond with the relevant information to connect with the buyer',
                'BAP: indicate the expected modes to initiate a support request',
                'BPP: indicate the different modes of providing support',
                'Select relevant checkboxes for unique use cases. Use cases may contain multiple parameters',
                'Use case limit = 3',
            ]
        },
        graph: {
            head: 'Graphical representation of the transaction Flows',
            list: [
                'Based on your selections, these are all the transaction flows that are possible on the network.',
                'Click on (x) to remove a particular node in the transaction flow',
                'Export the final flows using the options provided (export as PDF, export as JSON).',
                'Please share a copy of the exported files to ondc@qcin.org & saransh.agarwal@qcin.org'
            ]
        }


    }

}

export default ConstantData;