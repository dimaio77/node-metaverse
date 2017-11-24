// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {Vector3} from '../Vector3';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class ObjectDuplicatePacket implements Packet
{
    name = 'ObjectDuplicate';
    flags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294901850;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
        GroupID: UUID;
    };
    SharedData: {
        Offset: Vector3;
        DuplicateFlags: number;
    };
    ObjectData: {
        ObjectLocalID: number;
    }[];

    getSize(): number
    {
        return ((4) * this.ObjectData.length) + 65;
    }

}