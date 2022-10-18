describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/', {
    
            // Add basic auth headers
            auth: {
              username: 'taledo',
              password: 'recruiting4.0'
            },
            failOnStatusCode: false
          })
    })

    it('successfully logins', () => {
        cy.visit('/', {
    
            // Add basic auth headers
            auth: {
              username: 'taledo',
              password: 'recruiting4.0'
            },
            failOnStatusCode: false
          });
          cy.get('[data-id=email]').type('carlos.hevia@taledo.com');
          cy.get('[data-id=password]').type('Pochy*9024')
          cy.get('.ladda-button').click();
           })
  })