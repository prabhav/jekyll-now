module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'assets/js/libs/*.js', // All JS files in libs
          'assets/js/app.js',
        //   'assets/js/modernizr.js',
        ],
        dest: 'assets/js/production.js',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/production.js',
        dest: 'assets/js/production.min.js'
      },
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'assets/img/',
            src: ['*.{png,jpg,jpeg,gif}'],
            dest: 'assets/img/'
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
        // livereload: {
        //     host: 'localhost',
        //     port: '9000'
        // }
      },
      html_refresh: {
        files: ['*.html'],
        // tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
      },
      css: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        },
      },
      images: {
        files: ['assets/img/*.{png,jpg,jpeg,gif,svg}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        },
      },
    },
    sass: {
      dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'assets/css/style.css': 'assets/scss/style.scss'
        },
      },
    },
    autoprefixer: {
        dist: {
            files: {
                'assets/css/style.min.css': 'assets/css/style.css'
            }
        }
    },
    // {
    //   "crawl": false,
    //   "customTests": [],
    //   "dest": "/PATH/TO/modernizr-output.js",
    //   "tests": [
    //     "videoautoplay"
    //   ],
    //   "options": [
    //     "setClasses"
    //   ],
    //   "uglify": true
    // },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch']);
  // grunt.registerTask('default', ['concat', 'uglify', 'sass', 'autoprefixer', 'watch']);

};
