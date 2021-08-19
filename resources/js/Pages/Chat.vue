<template>
    <div class="mesgs">
		<div class="msg_history">
			<div v-for="chat in chats" :key="chat.id" class="incoming_msg my-1">
				<div :class="chat.sender_id === user.id ? 'outgoing_msg':'received_msg'">
					<div :class="chat.sender_id === user.id ? 'sent_msg':'received_withd_msg'">
						<p>{{chat.message}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="type_msg">
			<div class="input_msg_write">
				<input type="text" v-model="msg" class="write_msg" placeholder="Type a message" />
				<button @click="sendMsg()" class="msg_send_btn" type="button"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
	data() {
		return {
			chats: [],
			msg: null,
			loading: false
		};
	},
	mounted() {
		this.getChatList(this.$route.params.id);
		window.Echo.private('chats')
			.listen('ChatSent', (e) => {
				if(e.receiver_id == this.user.id && e.sender_id == this.$route.params.id) {
					this.chats.push({
						id: (new Date()).getTime(),
						sender_id: e.sender_id,
						receiver_id: e.receiver_id,
						message: e.message
					});
				}
			});
		console.log(window.Echo);
	},
	methods: {
		getChatList(receiver) {
			this.loading = true;
			axios.get(`api/v1/chat/${receiver}`).then(
				response => {
					const { data } = response;
					this.chats = data.payload;
					this.loading = false;
				},
				// eslint-disable-next-line no-unused-vars
				error => {
					this.loading = false;
					this.$message({
						message: 'Failed to fecth chat',
						type: 'warning'
					});
				}
			);
		},
		sendMsg() {
			if(!this.msg) {
				return;
			}

			const receiver = this.$route.params.id;
			axios.post(`api/v1/chat/${receiver}`, {
				message: this.msg
			}).then(
				response => {
					const { data } = response;
					if(data.success) {
						this.chats.push({
							id: (new Date()).getTime(),
							sender_id: this.user.id,
							receiver_id: receiver,
							message: this.msg
						});

						this.msg = null;
					}
				},
				// eslint-disable-next-line no-unused-vars
				error => {
					this.$message({
						message: 'Failed to send chat',
						type: 'warning'
					});
				}
			);
		}
	},
	computed: {
		...mapState({
			user: state => state.auth.user
		})
	}
};
</script>

<style scoped>
.received_msg {
	display: inline-block;
	padding: 0 0 0 10px;
	vertical-align: top;
	width: 92%;
}

.received_withd_msg p {
	background: #ebebeb none repeat scroll 0 0;
	border-radius: 0 15px 15px 15px;
	color: #646464;
	font-size: 14px;
	margin: 0;
	padding: 5px 10px 5px 12px;
	width: 100%;
}

.time_date {
	color: #747474;
	display: block;
	font-size: 12px;
	margin: 8px 0 0;
}

.received_withd_msg {
	width: 57%;
}

.mesgs{
	float: left;
	padding: 30px 15px 0 25px;
	width:70%;
}

.sent_msg p {
	background:#0465ac;
	border-radius: 12px 15px 15px 0;
	font-size: 14px;
	margin: 0;
	color: #fff;
	padding: 5px 10px 5px 12px;
	width: 100%;
}

.outgoing_msg {
	overflow: hidden;
	margin: 26px 0 26px;
}

.sent_msg {
	float: right;
	width: 46%;
}

.input_msg_write input {
	background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
	border: medium none;
	color: #4c4c4c;
	font-size: 15px;
	min-height: 48px;
	width: 100%;
	outline:none;
}

.type_msg {
	border-top: 1px solid #c4c4c4;
	position: relative;
}

.msg_send_btn {
	background: #05728f none repeat scroll 0 0;
	border:none;
	border-radius: 50%;
	color: #fff;
	cursor: pointer;
	font-size: 15px;
	height: 33px;
	position: absolute;
	right: 0;
	top: 11px;
	width: 33px;
}

.msg_history {
	height: 516px;
	overflow-y: auto;
}
</style>