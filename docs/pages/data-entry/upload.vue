<template>
	<div>
		<div class="page-row">
			<div class="page-content">
				<section class="mb-24">
					<h1>Upload</h1>
					<p class="text-dark">
						Upload file by selecting or dragging.
					</p>
				</section>
   				<a-divider />
				<section class="mb-24" id="When-To-Use">
					<h2>When To Use</h2>
					<p>
						Uploading is the process of publishing information (web pages, text,
						pictures, video, etc.) to a remote server via a web page or upload tool.
					</p>
					<ul>
						<li>When you need to upload one or more files.</li>
						<li>When you need to show the process of uploading.</li>
						<li>When you need to upload files by dragging and dropping.</li>
					</ul>
				</section>
				<h2>Examples</h2>
				<section class="mb-24" id="Upload-by-clicking">
					<a-divider orientation="left">Upload by clicking</a-divider>
					<p>
						Classic mode. File selection dialog pops up when upload button is clicked.
					</p>
					<div class="showcase">
						<a-upload
							name="file"
							:multiple="true"
							action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
							:headers="headers"
							@change="handleChange"
						>
							<a-button> <a-icon type="upload" /> Click to Upload </a-button>
						</a-upload>
					</div>
					<muse-snippet :code="codeSample"></muse-snippet>
				</section>
				<section class="mb-24" id="Drag-and-Drop">
					<a-divider orientation="left">Drag and Drop</a-divider>
					<div class="showcase">
						<a-upload-dragger
							name="file"
							:multiple="true"
							action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
							@change="handleChange"
						>
							<p class="ant-upload-drag-icon">
							<a-icon type="inbox" />
							</p>
							<p class="ant-upload-text">
							Click or drag file to this area to upload
							</p>
							<p class="ant-upload-hint">
							Support for a single or bulk upload. Strictly prohibit from uploading company data or other
							band files
							</p>
						</a-upload-dragger>
					</div>
					<muse-snippet :code="dragAndDropCode"></muse-snippet>
				</section>

				<p class="text-right font-semibold mb-24">
					Looking for more Ant Design Vue Upload? Please check the
					<a target="_blank" href="https://antdv.com/components/upload/">official docs</a>.
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
			title: 'Upload | Muse Dashboard Ant Design Vue @ Creative Tim',
			meta: [
				{ hid: 'description', name: 'description', content: 'Upload file by selecting or dragging.' }
			]
		}
	},
	data(){
		return {
			anchors: {
				"When-To-Use": "When To Use",
				"Upload-by-clicking": "Upload by clicking",
				"Drag-and-Drop": "Drag and Drop",
			},
			headers: {
				authorization: 'authorization-text',
			},
			codeSample: `
<template>
  <a-upload
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <a-button> <a-icon type="upload" /> Click to Upload </a-button>
  </a-upload>
</template>
<script>
export default {
  data() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(\`\${info.file.name} file uploaded successfully\`);
      } else if (info.file.status === 'error') {
        this.$message.error(\`\${info.file.name} file upload failed.\`);
      }
    },
  },
};
<\/script>
`,
			dragAndDropCode: `
<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">
      Click or drag file to this area to upload
    </p>
    <p class="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </a-upload-dragger>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(\`\${info.file.name} file uploaded successfully.\`);
      } else if (status === 'error') {
        this.$message.error(\`\${info.file.name} file upload failed.\`);
      }
    },
  },
};
<\/script>
`,
		}
	},
	methods: {
		handleChange(info) {
			if (info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (info.file.status === 'done') {
				this.$message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === 'error') {
				this.$message.error(`${info.file.name} file upload failed.`);
			}
		},
	}
}
</script>


<style lang="scss" scoped>
</style>