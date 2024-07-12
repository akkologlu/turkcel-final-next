"use client";
import { Rating } from "@smastrom/react-rating";
import { useEffect, useRef, useState } from "react";
import { addComment } from "../../_lib/actions";
import Button from "../common/Button";
import { useLocale, useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Link from "next/link";

const CommentModal = ({ product }) => {
  const locale = useLocale();
  const [isMounted, setIsMounted] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const t = useTranslations("lang");
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating || comment === "") {
      toast.error(t("pleaseComment"));
      return;
    }

    const newComment = {
      id: crypto.randomUUID(),
      rating,
      name: user.name,
      testimonial: comment,
      date: new Date().toISOString(),
    };
    const updatedProduct = {
      ...product,
      comments: [newComment, ...product.comments],
    };
    try {
      await addComment(product.id, updatedProduct);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {user ? (
        <div>
          <Button type="button" toggle="modal" target="#commentModal">
            {t("writeReview")}
          </Button>
        </div>
      ) : (
        <Link href={`/${locale}/login`}>
          <Button type="button">{t("loginToReview")}</Button>
        </Link>
      )}

      <div
        className="modal fade"
        id="commentModal"
        aria-labelledby="commentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <Rating
                  style={{ maxWidth: 180 }}
                  ref={ratingRef}
                  value={rating}
                  onChange={setRating}
                  className="mx-auto"
                />
                <label htmlFor="comment" className="form-label integralFont">
                  {t("comment")}
                </label>
                <textarea
                  className="form-control"
                  name="comment"
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="d-flex gap-3 mt-3">
                  <button
                    type="submit"
                    className="btn bg-dark text-white  rounded-pill py-2"
                    data-bs-dismiss={
                      comment !== "" && rating !== 0 ? "modal" : ""
                    }
                  >
                    {t("submit")}
                  </button>
                  <button
                    type="button"
                    className="btn bg-dark text-white  rounded-pill py-2"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setRating(0);
                      setComment("");
                    }}
                  >
                    {t("close")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentModal;
