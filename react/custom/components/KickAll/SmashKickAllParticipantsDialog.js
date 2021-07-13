/* eslint-disable require-jsdoc */
// @flow

import React from 'react';

import { Dialog } from '../../../features/base/dialog';
import { connect } from '../../../features/base/redux';

import SmashAbstractKickAllParticipantsDialog
    from './SmashAbstractKickAllParticipantsDialog';

class SmashKickAllParticipantsDialog extends SmashAbstractKickAllParticipantsDialog {

    render() {
        return (
            <Dialog
                cancelKey = 'Leave'
                okKey = 'End for all'
                onCancel = { this._onCancel }
                onSubmit = { this._onSubmit }
                titleKey = 'Kick all participants?'
                width = 'small'>
                <div>
                    You are the moderator of this room. Do you want to kick every participant and leave the room?
                </div>
            </Dialog>
        );
    }

    _onSubmit: () => boolean;

    _onCancel: () => boolean;
}

export default connect()(SmashKickAllParticipantsDialog);