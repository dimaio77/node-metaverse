// This file has been automatically generated by writePacketClasses.js

import {UUID} from '../UUID';
import Long = require('long');
import {MessageFlags} from '../../enums/MessageFlags';
import {Packet} from '../Packet';

export class ObjectPropertiesPacket implements Packet
{
    name = 'ObjectProperties';
    flags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyMedium;
    id = 65289;

    ObjectData: {
        ObjectID: UUID;
        CreatorID: UUID;
        OwnerID: UUID;
        GroupID: UUID;
        CreationDate: Long;
        BaseMask: number;
        OwnerMask: number;
        GroupMask: number;
        EveryoneMask: number;
        NextOwnerMask: number;
        OwnershipCost: number;
        SaleType: number;
        SalePrice: number;
        AggregatePerms: number;
        AggregatePermTextures: number;
        AggregatePermTexturesOwner: number;
        Category: number;
        InventorySerial: number;
        ItemID: UUID;
        FolderID: UUID;
        FromTaskID: UUID;
        LastOwnerID: UUID;
        Name: string;
        Description: string;
        TouchName: string;
        SitName: string;
        TextureID: string;
    }[];

    getSize(): number
    {
        return ((this.calculateVarVarSize(this.ObjectData, 'Name', 1) + this.calculateVarVarSize(this.ObjectData, 'Description', 1) + this.calculateVarVarSize(this.ObjectData, 'TouchName', 1) + this.calculateVarVarSize(this.ObjectData, 'SitName', 1) + this.calculateVarVarSize(this.ObjectData, 'TextureID', 1) + 174) * this.ObjectData.length) + 1;
    }

    calculateVarVarSize(block: object[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        block.forEach((bl: any) =>
        {
            size += bl[paramName].length + extraPerVar;
        });
        return size;
    }

}