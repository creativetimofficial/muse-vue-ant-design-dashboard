<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Modal</h1>
					<p class="text-dark">
						Modal dialogs.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						When requiring users to interact with the application, but without jumping to a new page and interrupting
						the user’s workflow, you can use <code>Modal</code> to create a new floating layer over the current page to get user
						feedback or display information.
						Additionally, if you need show a simple confirmation dialog, you can use <code>antd.Modal.confirm()</code>,
						and so on.
					</p>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Basic">
					<a-divider orientation="left">Basic</a-divider>
					<p>
						Basic modal.
					</p>
					<div class="showcase">
						<a-button type="primary" @click="showModal">
							Open Modal
						</a-button>
						<a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
						</a-modal>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Information-modal-dialog">
					<a-divider orientation="left">Information modal dialog</a-divider>
					<p>
						In the various types of information modal dialog, only one button to close dialog is provided.
					</p>
					<div class="showcase">
						<a-button @click="info">
							Info
						</a-button>
						<a-button @click="success">
							Success
						</a-button>
						<a-button @click="error">
							Error
						</a-button>
						<a-button @click="warning">
							Warning
						</a-button>
					</div>
					<muse-snippet :code="informationModalCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Modal? Please check the
					<a target="_blank" href="https://antdv.com/components/modal/">official docs</a>.
				</p>
			</div>
			<muse-anchor :anchors="anchors"></muse-anchor>
		</div>
	</div>
  
</template>

<script>

export default {
	head () {
		return {
			title: 'Modal | Muse Vue Ant Design Dashboard @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Modal dialogs.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Basic": "Basic",
				"Information-modal-dialog": "Information modal dialog",
			},
			ModalText: 'Content of the modal',
			visible: false,
			codeSample: `
<template>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal
    </a-button>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
<\/script>`,
		informationModalCode: `
<template>
  <div>
    <a-button @click="info">
      Info
    </a-button>
    <a-button @click="success">
      Success
    </a-button>
    <a-button @click="error">
      Error
    </a-button>
    <a-button @click="warning">
      Warning
    </a-button>
  </div>
</template>
<script>
import { Modal } from 'ant-design-vue';
export default {
  methods: {
    info() {
      const h = this.$createElement;
      this.$info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {},
      });
    },

    success() {
      this.$success({
        title: 'This is a success message',
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
      });
    },

    error() {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    },

    warning() {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    },
  },
};
<\/script>`,
		}
	},
	methods: {
		showModal() {
			this.visible = true;
		},
		handleCancel(e) {
			this.visible = false;
		},
		info() {
			this.$info({
				title: 'This is a notification message',
				// JSX support
				content: (
				<div>
					<p class="mb-0">some messages...some messages...</p>
					<p class="mb-0">some messages...some messages...</p>
				</div>
				),
			});
		},

		success() {
			this.$success({
				title: 'This is a success message',
				// JSX support
				content: (
				<div>
					<p class="mb-0">some messages...some messages...</p>
					<p class="mb-0">some messages...some messages...</p>
				</div>
				),
			});
		},

		error() {
			this.$error({
				title: 'This is an error message',
				content: 'some messages...some messages...',
			});
		},

		warning() {
			this.$warning({
				title: 'This is a warning message',
				content: 'some messages...some messages...',
			});
		},
	}
}
</script>


<style lang="scss" scoped>
</style>