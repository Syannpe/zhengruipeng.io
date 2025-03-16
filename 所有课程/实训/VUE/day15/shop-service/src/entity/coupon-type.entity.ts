import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiTags , ApiParam, ApiProperty,ApiPropertyOptional, ApiQuery, ApiHeader} from '@nestjs/swagger';

export class CouponType{
	
	@IsNotEmpty()
	@ApiProperty({
	  description: '优惠券类型id（增加时不需要传）',
		example:'1',
	})
	id:number;
	@IsNotEmpty()
	@ApiProperty({
	  description: '优惠券类型名称',
		example:'科技',
	})
	name:string;
	
	@IsNotEmpty()
	@ApiProperty({
	  description: '优惠券类型备注',
		example:'备注',
	})
	remark:string;
	
	insertTime:number;
	
}