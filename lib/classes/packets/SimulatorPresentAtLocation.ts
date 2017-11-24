// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import {IPAddress} from '../IPAddress';
import {Vector3} from '../Vector3';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class SimulatorPresentAtLocationPacket implements Packet
{
    name = 'SimulatorPresentAtLocation';
    flags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = 4294901771;

    SimulatorPublicHostBlock: {
        Port: number;
        SimulatorIP: IPAddress;
        GridX: number;
        GridY: number;
    };
    NeighborBlock: {
        IP: IPAddress;
        Port: number;
    }[];
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
    }[];

    getSize(): number
    {
        return (this.SimulatorBlock['SimName'].length + 1) + ((13) * this.TelehubBlock.length) + 68;
    }

}