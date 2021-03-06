// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { Quaternion } from '../Quaternion';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ObjectSpinUpdateMessage implements MessageBase
{
    name = 'ObjectSpinUpdate';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.ObjectSpinUpdate;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ObjectData: {
        ObjectID: UUID;
        Rotation: Quaternion;
    };

    getSize(): number
    {
        return 60;
    }

    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.ObjectData['ObjectID'].writeToBuffer(buf, pos);
        pos += 16;
        this.ObjectData['Rotation'].writeToBuffer(buf, pos);
        pos += 12;
        return pos - startPos;
    }

    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjObjectData: {
            ObjectID: UUID,
            Rotation: Quaternion
        } = {
            ObjectID: UUID.zero(),
            Rotation: Quaternion.getIdentity()
        };
        newObjObjectData['ObjectID'] = new UUID(buf, pos);
        pos += 16;
        newObjObjectData['Rotation'] = new Quaternion(buf, pos);
        pos += 12;
        this.ObjectData = newObjObjectData;
        return pos - startPos;
    }
}

