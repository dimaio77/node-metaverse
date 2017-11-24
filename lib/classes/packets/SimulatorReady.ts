// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {Vector3} from '../Vector3';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class SimulatorReadyPacket implements Packet
{
    name = 'SimulatorReady';
    flags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = 4294901769;

    SimulatorBlock: {
        SimName: string;
        SimAccess: number;
        RegionFlags: number;
        RegionID: UUID;
        EstateID: number;
        ParentEstateID: number;
    };
    TelehubBlock: {
        HasTelehub: boolean;
        TelehubPos: Vector3;
    };

    getSize(): number
    {
        return (this.SimulatorBlock['SimName'].length + 1) + 42;
    }

}