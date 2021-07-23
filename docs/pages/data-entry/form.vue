<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Form</h1>
					<p class="text-dark">
						Form is used to collect, validate, and submit the user input, usually
						contains various form items including checkbox, radio, input, select,
						and etc.
					</p>
					<p class="text-dark">
						<strong>If you need to use <code>v-model</code> verification, you can use new form <code>a-form-model</code></strong>
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<ul>
						<li>When you need to create a instance or collect information.</li>
						<li>When you need to validate fields in certain rules.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Coordinated-Controls">
					<a-divider orientation="left">Coordinated Controls</a-divider>
					<p>
						Use <code>setFieldsValue</code> to set other control’s value programmaticly.
					</p>
					<div class="showcase">
						<a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
							<a-form-item label="Note">
							<a-input
								v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
							/>
							</a-form-item>
							<a-form-item label="Gender">
							<a-select
								v-decorator="[
								'gender',
								{ rules: [{ required: true, message: 'Please select your gender!' }] },
								]"
								placeholder="Select a option and change input text above"
								@change="handleSelectChange"
							>
								<a-select-option value="male">
								male
								</a-select-option>
								<a-select-option value="female">
								female
								</a-select-option>
							</a-select>
							</a-form-item>
							<a-form-item :wrapper-col="{ span: 12, offset: 5 }">
							<a-button type="primary" html-type="submit">
								Submit
							</a-button>
							</a-form-item>
						</a-form>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Dynamic-Rules">
					<a-divider orientation="left">Dynamic Rules</a-divider>
					<p>
						Perform different check rules according to different situations.
					</p>
					<div class="showcase">
						<a-form :form="dynamicRulesForm">
							<a-form-item
							:label-col="formItemLayout.labelCol"
							:wrapper-col="formItemLayout.wrapperCol"
							label="Name"
							>
							<a-input
								v-decorator="[
								'username',
								{ rules: [{ required: true, message: 'Please input your name' }] },
								]"
								placeholder="Please input your name"
							/>
							</a-form-item>
							<a-form-item
							:label-col="formItemLayout.labelCol"
							:wrapper-col="formItemLayout.wrapperCol"
							label="Nickname"
							>
							<a-input
								v-decorator="[
								'nickname',
								{ rules: [{ required: checkNick, message: 'Please input your nickname' }] },
								]"
								placeholder="Please input your nickname"
							/>
							</a-form-item>
							<a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
							<a-checkbox :checked="checkNick" @change="handleChange">
								Nickname is required
							</a-checkbox>
							</a-form-item>
							<a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
							<a-button type="primary" @click="check">
								Check
							</a-button>
							</a-form-item>
						</a-form>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Form? Please check the
					<a target="_blank" href="https://antdv.com/components/form/">official docs</a>.
				</p>
			</div>
			<muse-anchor :anchors="anchors"></muse-anchor>
		</div>
	</div>
  
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

export default {
	head () {
		return {
			title: 'Form | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: `Form is used to collect, validate, and submit the user input, usually
						contains various form items including checkbox, radio, input, select,
						and etc.` }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Coordinated-Controls": "Coordinated Controls",
				"Dynamic-Rules": "Dynamic Rules",
			},
			formLayout: 'horizontal',
			form: this.$form.createForm(this, { name: 'coordinated' }),
			checkNick: false,
			formItemLayout,
			formTailLayout,
			dynamicRulesForm: this.$form.createForm(this, { name: 'dynamic_rule' }),
			codeSample: `
<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
    <a-form-item label="Note">
      <a-input
        v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Gender">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your gender!' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: \`Hi, \${value === 'male' ? 'man' : 'lady'}!\`,
      });
    },
  },
};
<\/script>`,
			dynamicRulesCode: `
<template>
  <a-form :form="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Name"
    >
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your name' }] },
        ]"
        placeholder="Please input your name"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="Nickname"
    >
      <a-input
        v-decorator="[
          'nickname',
          { rules: [{ required: checkNick, message: 'Please input your nickname' }] },
        ]"
        placeholder="Please input your nickname"
      />
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-checkbox :checked="checkNick" @change="handleChange">
        Nickname is required
      </a-checkbox>
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-button type="primary" @click="check">
        Check
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success');
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true });
      });
    },
  },
};
<\/script>`,
		}
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault();
			this.form.validateFields((err, values) => {
				if (!err) {
					console.log('Received values of form: ', values);
				}
			});
		},
		handleSelectChange(value) {
			this.form.setFieldsValue({
				note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
			});
		},
		check() {
			this.dynamicRulesForm.validateFields((err, values) => {
				if (!err) {
					console.info('success');
				}
			});
		},
		handleChange(e) {
			this.checkNick = e.target.checked;
			this.$nextTick(() => {
				this.dynamicRulesForm.validateFields(['nickname'], { force: true });
			});
		},
	}
}
</script>


<style lang="scss" scoped>
</style>