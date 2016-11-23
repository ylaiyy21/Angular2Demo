import { Injectable } from '@angular/core';

import { User } from '../pojo/user';

import { USERMAP,USERS } from '../pojo/usermap';

@Injectable()
export class UserService {
	getUser():User[]{
		return USERS;
	}
}
