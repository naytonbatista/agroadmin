import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import Empresa from '../views/empresa'

import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <div>
        <Switch>
            <Route exact path='/' component={Empresa} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)