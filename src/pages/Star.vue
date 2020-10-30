<template>
  <q-page class="q-pa-lg q-gutter-sm">
    <h5 class="q-mt-none">Star</h5>
    <p>Youth is not a time of life; it is a state of mind. It is not a matter of rosy cheeks, red lips and supple knees. It is a matter of the will, a quality of the imagination, vigor of the emotions; it is the freshness of the deep spring of life. </p>
    <p>Youth means a temperamental predominance of courage over timidity, of the appetite for adventure over the love of ease. This often exits in a man of 60, more than a boy of 20.nobody grows merely by the number of years; we grow old by deserting our ideas. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul. Worry, fear, self-distrust1 bows the heart and turns the spirit back to dust.  </p>
    <p>Whether 60 or 16, there is in every human being’s heart the lure of wonders, the unfailing childlike appetite of what’s next and the joy of the game of living. In the center of your heart and my heart there is a wireless station; so long as it receives messages of beauty, hope, cheer, courage and power from men and from infinite, so long as you are young. </p>
    <p>When the aerials are down, and your spirit is covered with the snows of cynicism and the ice of pessimism, then you’ve grown old, even at 20, but as long as your aerials are up, to catch waves of optimism, there’s hope you may die young at 80. </p>
  <q-editor
      v-model="qeditor"
      :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
    />
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      qeditor:''
    }
  }

}
</script>
