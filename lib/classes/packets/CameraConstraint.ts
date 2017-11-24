// This file has been automatically generated by writePacketClasses.js

import {Vector4} from '../Vector4';
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class CameraConstraintPacket implements Packet
{
    name = 'CameraConstraint';
    flags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyHigh;
    id = 22;

    CameraCollidePlane: {
        Plane: Vector4;
    };

    getSize(): number
    {
        return 16;
    }

}