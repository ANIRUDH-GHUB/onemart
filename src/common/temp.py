def img_beam_decoder(n, image):
  start = [word_to_id["<START>"]]
  start_wd = [[start, 0.0]]
  x=1

  while len(start_wd[0][0]) < MAX_LEN:

    temp = []
    for s in start_wd:

      sequ = pad_sequences([s[0]], maxlen = MAX_LEN, padding = 'post').reshape((1, MAX_LEN))
      p = model.predict([image.reshape(1, 2048), sequ])
      wd_p = np.argsort(p[0])[-n:]

      for w in wd_p:
        next_cap, prob = s[0][:], s[1]
        next_cap.append(w)
        prob += p[0][w]
        temp.append([next_cap, prob])

    start_wd = temp
    start_wd = sorted(start_wd, reverse=False, key=lambda x: x[1])
    start_wd = start_wd[-n:]

  start_wd = start_wd[-1][0]
  CAPS = [id_to_word[i] for i in start_wd]

  return " ".join(CAPS[1:])
       